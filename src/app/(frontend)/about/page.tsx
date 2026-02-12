// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import {
  ArrowRight,
  CalendarDays,
  HeartHandshake,
  MapPin,
  Sparkles,
  Utensils,
  Users,
} from "lucide-react";

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
    <main className="min-h-dvh bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden border-b">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="gap-1">
                  <Sparkles className="h-3.5 w-3.5" />
                  About Crown Inn
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  Pontville, Tasmania
                </Badge>
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                Since 1835, a country favourite in historic Pontville
              </h1>

              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                Crown Inn is a welcoming country pub known for genuine
                hospitality and wholesome dining—open 7 days a week for locals,
                travellers, and families.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/contact">
                    Visit Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/menu">View Menu</Link>
                </Button>
              </div>
            </div>

            <div className="md:col-span-5">
              <Card className="overflow-hidden rounded-2xl">
                <div className="relative h-56 w-full md:h-64">
                  <Image
                    src="/about/hero.jpg"
                    alt="Crown Inn venue"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <CardContent className="space-y-2 p-5">
                  <p className="text-sm font-medium">A local landmark</p>
                  <p className="text-sm text-muted-foreground">
                    A classic pub atmosphere with modern comforts—perfect for
                    lunch, dinner, or a laid-back drink.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Our Story
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Simple, timeless, and community-first.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="space-y-4 text-sm leading-7 text-muted-foreground">
              <p>
                Established in{" "}
                <span className="font-medium text-foreground">1835</span>, the
                Crown Inn has been part of the Pontville community for
                generations. It’s the kind of place where locals gather,
                travellers stop in, and families return to again and again.
              </p>
              <p>
                We keep things honest: hearty meals, friendly service, and a
                welcoming atmosphere that feels comfortable the moment you walk
                in.
              </p>
              <p>
                Whether you’re here for a quick lunch, a long dinner, live
                music, or a special celebration, our goal is always the
                same—make you feel at home.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Card className="rounded-2xl">
                <CardContent className="p-6">
                  <p className="text-sm font-semibold">Open 7 days</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Bar, bistro, and takeaway options available.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl">
                <CardContent className="p-6">
                  <p className="text-sm font-semibold">Events & functions</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    From weekly favourites to private celebrations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* VALUES */}
      <section className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              What we stand for
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              The little things that make a big difference.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/events">See What’s On</Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {VALUES.map((v) => {
            const Icon = v.icon;
            return (
              <Card key={v.title} className="rounded-2xl">
                <CardContent className="flex items-start gap-3 p-6">
                  <div className="mt-0.5 rounded-xl border bg-card p-2">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">{v.title}</p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {v.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <Separator />

      {/* GALLERY */}
      <section className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              A glimpse inside
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Food, atmosphere, and the moments that make Crown Inn special.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/menu">Explore the Menu</Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-12">
          <Card className="overflow-hidden rounded-2xl md:col-span-7">
            <div className="relative h-64 w-full md:h-[420px]">
              <Image
                src={GALLERY[0].src}
                alt={GALLERY[0].alt}
                fill
                className="object-cover"
              />
            </div>
          </Card>

          <div className="grid gap-4 md:col-span-5">
            {GALLERY.slice(1).map((img) => (
              <Card key={img.src} className="overflow-hidden rounded-2xl">
                <div className="relative h-40 w-full md:h-[130px]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* CTA */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-10">
        <div className="rounded-2xl border bg-card p-8 md:p-10">
          <h3 className="text-xl font-semibold">Come say hello</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Book a table, explore the menu, or drop in for a drink. We’d love to
            have you.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact">
                Contact / Book <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/events">Upcoming Events</Link>
            </Button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Made with <span aria-hidden>♥</span> and brains — Feneel
          </p>
        </div>
      </section>
    </main>
  );
}
