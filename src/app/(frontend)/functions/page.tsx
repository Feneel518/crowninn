// app/functions/page.tsx
import Link from "next/link";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import {
  CalendarCheck,
  Check,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Users,
  Utensils,
  Wine,
} from "lucide-react";
import FunctionHero from "@/components/functions/FunctionHero";
import Functions from "@/components/functions/Functions";
import FunctionDetailsNeeded from "@/components/functions/FunctionDetailsNeeded";
import FunctionFAQ from "@/components/functions/FunctionFAQ";

type FunctionType = {
  title: string;
  subtitle: string;
  image: string;
  bullets: string[];
};

const FUNCTION_TYPES: FunctionType[] = [
  {
    title: "Birthdays",
    subtitle: "Celebrate with great food, drinks, and warm pub vibes.",
    image: "/functions/birthday.jpg",
    bullets: [
      "Reserved seating",
      "Custom food packages",
      "Cake-friendly options",
    ],
  },
  {
    title: "Engagements",
    subtitle: "A relaxed space for your special moment—done beautifully.",
    image: "/functions/engagement.jpg",
    bullets: [
      "Private corner options",
      "Table styling add-ons",
      "Flexible menu",
    ],
  },
  {
    title: "Corporate & Team Nights",
    subtitle: "Easy planning, seamless service, and plenty of room to unwind.",
    image: "/functions/corporate.jpg",
    bullets: ["Group tabs", "Pre-order menu", "Fast service setup"],
  },
  {
    title: "Family Gatherings",
    subtitle: "Comfortable, friendly, and perfect for all ages.",
    image: "/functions/family.jpg",
    bullets: ["Family-friendly seating", "Kids options", "Easy parking access"],
  },
];

const PACKAGES = [
  {
    name: "Casual Gathering",
    price: "From $25 pp",
    items: ["Shared starters", "2 mains options", "Water & soft drink add-on"],
  },
  {
    name: "Classic Celebration",
    price: "From $45 pp",
    items: ["Canapés + mains", "Dessert add-on", "Dedicated seating area"],
  },
  {
    name: "Premium Function",
    price: "From $65 pp",
    items: [
      "Chef-curated menu",
      "Priority service",
      "Styling add-ons available",
    ],
  },
];

export default function FunctionsPage() {
  return (
    <main className="min-h-screen bg-background  font-sans">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl bg-red-700/20" />
        <div className="absolute top-40 right-[-120px] h-[420px] w-[420px] rounded-full blur-3xl bg-pink-600/20" />
        <div className="absolute bottom-40 left-[-140px] h-[520px] w-[520px] rounded-full blur-3xl bg-primary/20" />
      </div>
      <div className="h-svh -mt-16 md:-mt-20 ">
        <FunctionHero></FunctionHero>
      </div>
      <Functions></Functions>
      <FunctionDetailsNeeded></FunctionDetailsNeeded>
      <FunctionFAQ></FunctionFAQ>
    </main>
  );
}
