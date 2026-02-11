"use client";

import Link from "next/link";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import SectionComponent from "./SectionComponent";
import Image from "next/image";
import { IconRipple } from "@tabler/icons-react";
import { CONTACTEMAIL } from "@/lib/constants/contactConstants";
import ArrowButton from "./ArrowButton";

const nav = [
  { label: "Menu", href: "/menu" },
  { label: "Events", href: "/events" },
  { label: "Functions", href: "/functions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const lat = -42.68448319849066;
const lng = 147.26557048966598;

const gmailLink =
  typeof window !== "undefined" &&
  /Android|iPhone|iPad/i.test(navigator.userAgent)
    ? `googlegmail://co?to=${encodeURIComponent(CONTACTEMAIL.recepient)}&su=${encodeURIComponent(CONTACTEMAIL.subject)}&body=${encodeURIComponent(CONTACTEMAIL.body)}`
    : `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACTEMAIL.recepient)}&su=${encodeURIComponent(CONTACTEMAIL.subject)}&body=${encodeURIComponent(CONTACTEMAIL.body)}`;
const contactItems = [
  {
    label: "Address",
    value: "Pontville Tasmania 7030",
    href: `https://www.google.com/maps?q=${lat},${lng}`,
    external: true,
  },
  {
    label: "Email",
    value: "info@crowninn.com.au",
    href: gmailLink,
    external: true,
  },
  {
    label: "Phone",
    value: "+(03) 6268 1235",
    href: "tel:+0362681235",
    external: false,
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/crowninn",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/crowninn",
  },
];
export function Footer() {
  return (
    <>
      <SectionComponent className="border-t border-secondary-foreground">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-12  border-b border-secondary-foreground pb-12">
          <div className="">
            <Link href="/" className="flex items-center gap-2 min-w-0">
              <div className="relative size-20 md:size-14 lg:size-20 shrink-0 -mt-2 -ml-6">
                <Image
                  src="/logonew.svg"
                  alt="The Crowninn Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              <div className="min-w-0 leading-tight -ml-4">
                <p className="font-serif tracking-tight  text-xl sm:text-xl md:text-2xl lg:text-[30px] truncate">
                  The Crown Inn
                </p>

                <p className="font-sans tracking-widest text-[10px] -mt-2 sm:text-[11px] md:text-xs text-foreground/70 flex items-center gap-2">
                  <span className="truncate ml-1">Bushrangers Bistro</span>
                  <IconRipple strokeWidth={0.75} className="shrink-0" />
                </p>
              </div>
            </Link>
          </div>

          <div className="flex flex-col gap-2 font-sans">
            <h3 className="font-serif text-2xl">MENU</h3>
            {nav.map((link) => {
              return (
                <Link
                  href={link.href}
                  className="hover:underline hover:underline-offset-4 transition-all duration-200 ease-in-out">
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-2 font-sans">
            <h3 className="font-serif text-2xl">CONTACT</h3>
            {contactItems.map((item) => (
              <p key={item.label}>
                <span className="">{item.label.toUpperCase()}: </span>

                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="hover:underline">
                  {item.value}
                </Link>
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-2 font-sans">
            <h3 className="font-serif text-2xl">SOCIAL LINKS</h3>
            {socialLinks.map((item) => {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="hover:underline">
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-2 font-sans">
            <h3 className="font-serif text-2xl">WORK HOURS</h3>
            <p className="">Monday to Sunday</p>
            <p>10:00 to 23:00</p>
          </div>

          <div className="flex flex-col gap-2 font-sans">
            <p className="">Book a table</p>
            <p>Leave Feedback</p>
          </div>

          <div className="col-span-2 flex flex-col gap-2 font-sans">
            <h3 className="font-serif text-2xl">STAY TUNED</h3>
            <div className="flex  border-b border-secondary-foreground p-2 pl-0 text-base ">
              <Input
                className="border-none shadow-none font-sans focus:ring-0 pl-0 "
                placeholder="Your email"></Input>
              <ArrowButton
                direction="right"
                label="Submit"
                showLabel={false}></ArrowButton>
            </div>
            <p className="text-muted-foreground text-sm">
              By clicking on the submit button you are agreeing the terms &
              condition and Privacy Policy.
            </p>
          </div>
        </div>
      </SectionComponent>
      <div className="md:-mt-12 max-md:py-4 text-center">
        <p className="text-xs font-sans">
          Made with <span aria-hidden>❤️</span> and brains by{" "}
          <a
            href="https://feneel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:underline">
            Feneel
          </a>
        </p>
      </div>
    </>
  );
}
