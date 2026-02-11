import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import HowToBook from "@/components/home/HowToBook";
import OurInstagram from "@/components/home/OurInstagram";
import OurLocation from "@/components/home/OurLocation";
import OurMenu from "@/components/home/OurMenu";
import Testimonials from "@/components/home/Testimonials";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const nav = [
    { label: "Menu", href: "#menu" },
    { label: "Events", href: "#events" },
    { label: "Functions", href: "#functions" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <main className="min-h-screen bg-background  font-sans">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl bg-red-700/20" />
        <div className="absolute top-40 right-[-120px] h-[420px] w-[420px] rounded-full blur-3xl bg-pink-600/20" />
        <div className="absolute bottom-40 left-[-140px] h-[520px] w-[520px] rounded-full blur-3xl bg-primary/20" />
      </div>
      <div className="h-svh -mt-16 md:-mt-20 ">
        <HeroSection></HeroSection>
      </div>
      <AboutSection></AboutSection>
      <OurMenu></OurMenu>
      <HowToBook></HowToBook>
      <Testimonials></Testimonials>
      <OurInstagram></OurInstagram>
      <OurLocation></OurLocation>
    </main>
  );
};

export default page;
