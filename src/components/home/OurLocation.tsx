import { FC } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import MapboxMap from "../global/MapBox";

interface OurLocationProps {}

const OurLocation: FC<OurLocationProps> = ({}) => {
  // Replace with Crown Inn coordinates (Pontville)

  const lat = -42.68448319849066;
  const lng = 147.26557048966598;
  return (
    <section className="px-6 py-16 md:px-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="font-serif text-[clamp(42px,6vw,80px)]">Find Us</h2>
          <p className="mt-4 text-sm text-white/80 md:text-base">
            The Crown Inn, Pontville. Drop in for a meal, a drink, or a catch-up
            — open 7 days.
          </p>

          <div className="mt-6 space-y-2 text-sm text-white/80">
            <p>
              <span className="text-white/90">Address:</span> Pontville, TAS
            </p>
            <p>
              <span className="text-white/90">Hours:</span> 11:30am – late
            </p>
          </div>

          <div className="mt-8 flex gap-3">
            <Button asChild>
              <Link
                href={`https://www.google.com/maps?q=${lat},${lng}`}
                target="_blank">
                Get Directions
              </Link>
            </Button>

            <Button asChild variant="outline">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>

        <MapboxMap lat={lat} lng={lng} markerLabel="The Crown Inn" />
      </div>
    </section>
  );
};

export default OurLocation;
