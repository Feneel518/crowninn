import Image from "next/image";
import { FC } from "react";
import { Badge } from "../ui/badge";
import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import ArrowButton from "../global/ArrowButton";

interface FunctionHeroProps {}

const FunctionHero: FC<FunctionHeroProps> = ({}) => {
  return (
    <section className="relative grid min-h-svh h-screen md:grid-cols-2">
      {/* Left: Main image */}

      <div className="absolute inset-0 z-30 bg- flex items-center justify-center md:hidden ">
        <div className="bg-background/60 backdrop-blur-[2px] mx-4 absolute p-6 rounded-sm">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="secondary" className="gap-1">
              <Sparkles className="h-3.5 w-3.5" />
              Functions & Catering
            </Badge>
            <Badge variant="outline" className="gap-1">
              <MapPin className="h-3.5 w-3.5" />
              Pontville, Tasmania
            </Badge>
          </div>

          <h2
            className={cn(
              "font-serif uppercase text-[clamp(60px,10vw,100px)] leading-tight md:leading-[100px]",
            )}>
            Celebrate at Pontville
          </h2>
          <p className=" max-w-md text-base leading-7 md:text-muted-foreground">
            Birthdays, corporate nights, family gatherings, and
            celebrations—book a space with flexible menus, friendly service, and
            a relaxed country vibe.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <ArrowButton direction="right" label="Reserve Now"></ArrowButton>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-2 p-20 relative max-md:hidden">
        <div className="w-full h-full">
          <div className="absolute right-6 top-24 w-[260px] aspect-5/3 md:left-20 md:top-32 md:w-[450px] max-md:hidden">
            <Image
              src="/sideImage.jpg"
              alt="side Image"
              fill
              sizes="(min-width: 768px) 450px, 0px"
              className="object-cover rounded-sm"
            />
          </div>
        </div>
        <div className="flex  flex-col justify-end max-md:hidden">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="gap-1">
              <Sparkles className="h-3.5 w-3.5" />
              Functions & Catering
            </Badge>
            <Badge variant="outline" className="gap-1">
              <MapPin className="h-3.5 w-3.5" />
              Pontville, Tasmania
            </Badge>
          </div>

          <h2
            className={cn(
              "font-serif uppercase text-[clamp(40px,8vw,100px)] leading-[100px]",
            )}>
            Celebrate at Pontville
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">
            Birthdays, corporate nights, family gatherings, and
            celebrations—book a space with flexible menus, friendly service, and
            a relaxed country vibe.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <ArrowButton direction="right" label="Enquire Now"></ArrowButton>
          </div>
        </div>
      </div>

      <div className="relative min-h-svh w-full md:h-screen">
        <Image
          src="/mainImage.jpg"
          alt="Hero Image"
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default FunctionHero;
