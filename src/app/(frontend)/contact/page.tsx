// app/contact/page.tsx
import Link from "next/link";
import { Mail, MapPin, Phone, Clock, ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// If you already have your Mapbox component, use it:
// import MapboxMap from "@/components/site/mapbox-map";

type ContactItem = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  icon: React.ElementType;
};

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/", external: true },
  { label: "Facebook", href: "https://facebook.com/", external: true },
];

export default function ContactPage() {
  // Crown Inn coords (replace if needed)
  const lat = -42.7302;
  const lng = 147.2824;

  const mapsHref = `https://www.google.com/maps?q=${lat},${lng}`;
  const gmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=info@crowninn.com.au&su=Booking%20Enquiry&body=Hi%20Crown%20Inn%2C%0A%0A";

  const CONTACT_ITEMS: ContactItem[] = [
    {
      label: "Address",
      value: "365 Brighton Road, Pontville Tasmania 7030",
      href: mapsHref,
      external: true,
      icon: MapPin,
    },
    {
      label: "Email",
      value: "info@crowninn.com.au",
      href: gmailLink,
      external: true,
      icon: Mail,
    },
    {
      label: "Phone",
      value: "+(03) 6268 1235",
      href: "tel:+0362681235",
      external: false,
      icon: Phone,
    },
  ];

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
                <Badge variant="secondary">Contact</Badge>
                <Badge variant="outline">Pontville, Tasmania</Badge>
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                Get in touch
              </h1>

              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                Book a table, ask about events, or enquire for functions—send us
                a message and we’ll get back to you.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild>
                  <a href="#contact-form">
                    Send a message <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={mapsHref} target="_blank" rel="noopener noreferrer">
                    Open in Maps
                  </a>
                </Button>
              </div>

              <div className="mt-7 flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary/80" />
                  <span>Monday – Sunday, 10:00 – 23:00</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="md:col-span-5">
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg">Contact details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  {CONTACT_ITEMS.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.label} className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-xl border bg-card p-2">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs font-semibold tracking-wide text-muted-foreground">
                            {item.label.toUpperCase()}
                          </p>

                          {item.href ? (
                            <Link
                              href={item.href}
                              target={item.external ? "_blank" : undefined}
                              rel={
                                item.external
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="block truncate text-sm hover:underline">
                              {item.value}
                            </Link>
                          ) : (
                            <p className="text-sm">{item.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}

                  <Separator />

                  <div className="flex flex-wrap gap-2">
                    {SOCIAL_LINKS.map((s) => (
                      <Button key={s.label} asChild variant="outline" size="sm">
                        <Link
                          href={s.href}
                          target={s.external ? "_blank" : undefined}
                          rel={s.external ? "noopener noreferrer" : undefined}>
                          {s.label}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* MAP + FORM */}
      <section className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10">
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          {/* Map */}
          <div className="md:col-span-7">
            <Card className="overflow-hidden rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Find us</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="overflow-hidden rounded-2xl ring-1 ring-black/10">
                  {/* Replace with your Mapbox component if you want */}
                  <iframe
                    title="Crown Inn Location"
                    src={`https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`}
                    className="h-[380px] w-full md:h-[460px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  {/* Example:
                  <MapboxMap
                    lat={lat}
                    lng={lng}
                    markerLabel="Crown Inn"
                    className=""
                  />
                  */}
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Button asChild variant="outline">
                    <a
                      href={mapsHref}
                      target="_blank"
                      rel="noopener noreferrer">
                      Open in Google Maps
                    </a>
                  </Button>
                  <Button asChild>
                    <a href="tel:+0362681235">Call now</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <div className="md:col-span-5">
            <Card id="contact-form" className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">Send a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* This is UI-only. Wire it to a Server Action later. */}
                <div className="grid gap-4">
                  <Input placeholder="Your name" />
                  <Input type="email" placeholder="Your email" />
                  <Input placeholder="Phone (optional)" />
                  <Input placeholder="What is this about? (Booking / Event / Function)" />
                  <Textarea placeholder="Message" className="min-h-[140px]" />
                </div>

                <Button className="w-full">
                  Send message <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-xs text-muted-foreground">
                  Prefer email?{" "}
                  <Link
                    href={gmailLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4">
                    Compose in Gmail
                  </Link>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-10">
        <div className="rounded-2xl border bg-card p-8 md:p-10">
          <h3 className="text-xl font-semibold">See you at Crown Inn</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Open daily. Walk-ins welcome, bookings recommended for events and
            groups.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/menu">View Menu</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/events">What’s On</Link>
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
    