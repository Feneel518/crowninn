"use client";

import * as React from "react";
import mapboxgl from "mapbox-gl";

type MapboxMapProps = {
  lng: number;
  lat: number;
  zoom?: number;
  className?: string;
  markerLabel?: string;
};

export default function MapboxMap({
  lng,
  lat,
  zoom = 17.5,
  className = "",
  markerLabel = "Location",
}: MapboxMapProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const mapRef = React.useRef<mapboxgl.Map | null>(null);

  React.useEffect(() => {
    if (!containerRef.current) return;
    if (mapRef.current) return;

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token) {
      console.error("Missing NEXT_PUBLIC_MAPBOX_TOKEN");
      return;
    }

    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [lng, lat],
      zoom,
      pitch: 55,
      bearing: -25,
      antialias: true,
    });

    mapRef.current = map;

    map.addControl(
      new mapboxgl.NavigationControl({ visualizePitch: true }),
      "top-right",
    );

    // ----- Pointer Marker (Pin) -----
    const pin = document.createElement("div");
    pin.innerHTML = `
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" fill="#111827"/>
        <circle cx="12" cy="10" r="2.6" fill="#ffffff"/>
      </svg>
    `;
    pin.style.transform = "translateY(-16px)"; // lift the tip to the exact coordinate

    new mapboxgl.Marker({ element: pin, anchor: "bottom" })
      .setLngLat([lng, lat])
      .setPopup(
        new mapboxgl.Popup({ offset: 18 }).setHTML(
          `<div style="font-size:14px;font-weight:600;">${markerLabel}</div>`,
        ),
      )
      .addTo(map);

    // ----- 3D Buildings -----
    map.on("load", () => {
      // Find a label layer to place buildings underneath nicely
      const layers = map.getStyle().layers || [];
      const labelLayerId = layers.find(
        (l) => l.type === "symbol" && (l.layout as any)?.["text-field"],
      )?.id;

      // Mapbox standard styles include a "composite" source with "building" layer.
      // If you use a custom style, ensure it contains these.
      map.addLayer(
        {
          id: "3d-buildings",
          source: "composite",
          "source-layer": "building",
          filter: ["==", "extrude", "true"],
          type: "fill-extrusion",
          minzoom: 14,
          paint: {
            "fill-extrusion-color": "#d1d5db",
            "fill-extrusion-height": ["get", "height"],
            "fill-extrusion-base": ["get", "min_height"],
            "fill-extrusion-opacity": 0.92,
          },
        },
        labelLayerId,
      );
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [lng, lat, zoom, markerLabel]);

  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl ring-1 ring-black/10",
        className,
      ].join(" ")}>
      <div ref={containerRef} className="h-[380px] w-full md:h-[460px]" />
    </div>
  );
}
