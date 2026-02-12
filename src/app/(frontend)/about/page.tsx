// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import AboutHero from "@/components/about/AboutHero";
import OurAmbience from "@/components/about/OurAmbience";
import WhoWeAre from "@/components/about/WhoWeAre";
import {
  ArrowRight,
  CalendarDays,
  HeartHandshake,
  Users,
  Utensils,
} from "lucide-react";
import PentvilleGallery from "@/components/about/PentvilleGallery";

const VALUES = [
  {
    title: "Genuine Hospitality",
    desc: "A warm welcome, friendly service, and the kind of place you’ll want to return to.",
    icon: HeartHandshake,
  },
  {
    title: "Wholesome Country Dining",
    desc: "Classic pub favourites, seasonal specials, and comfort food done right.",
    icon: Utensils,
  },
  {
    title: "A Place for Everyone",
    desc: "Families, locals, travellers—come as you are. Good vibes and good company.",
    icon: Users,
  },
  {
    title: "A Long, Proud Story",
    desc: "A local landmark since 1835 in historic Pontville—still here, still loved.",
    icon: CalendarDays,
  },
];

const GALLERY = [
  { src: "/about/gallery-1.jpg", alt: "Crown Inn dining area" },
  { src: "/about/gallery-2.jpg", alt: "Crown Inn bar atmosphere" },
  { src: "/about/gallery-3.jpg", alt: "Crown Inn food and drinks" },
  { src: "/about/gallery-4.jpg", alt: "Crown Inn outdoor / entrance" },
];

export default function AboutPage() {
  return (
    <main>
      <div className="pointer-events-none fixed inset-0 opacity-70 -z-10">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl bg-red-700/20" />
        <div className="absolute top-40 right-[-120px] h-[420px] w-[420px] rounded-full blur-3xl bg-pink-600/20" />
        <div className="absolute bottom-40 left-[-140px] h-[520px] w-[520px] rounded-full blur-3xl bg-primary/20" />
      </div>
      <div className="h-svh -mt-16 md:-mt-20 ">
        <AboutHero></AboutHero>
      </div>
      <OurAmbience></OurAmbience>
      <WhoWeAre></WhoWeAre>
      <PentvilleGallery></PentvilleGallery>
    </main>
  );
}
