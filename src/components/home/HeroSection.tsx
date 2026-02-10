import Image from "next/image";
import { FC } from "react";
import ArrowButton from "../global/ArrowButton";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    // <div className="h-screen grid md:grid-cols-2 relative">
    //   <div className="relative h-full w-full">
    //     <Image
    //       src={"/mainImage.jpg"}
    //       alt="Hero Image"
    //       fill
    //       className="object-cover"></Image>
    //   </div>
    //   <div className="relative p-20 hidden md:block">
    //     <div className="absolute w-[450px] aspect-5/3  right-20 top-32 ">
    //       <Image src={"/sideImage.jpg"} alt="side Image" fill></Image>
    //     </div>
    //     <div className="h-full  flex items-end justify-end gap-4 ">
    //       <ArrowButton direction="right" label="View Menu"></ArrowButton>
    //     </div>
    //   </div>

    //   <div className="absolute inset-0 flex items-center justify-center ">
    //     <div className="flex flex-col mt-8">
    //       <p className="md:text-2xl font-sans -mb-4 md:-mb-8">
    //         Bushrangers Bistro
    //       </p>
    //       <h1 className="text-[70px] md:text-[200px] font-serif ">
    //         The Crown Inn
    //       </h1>
    //       <div className="flex items-end justify-end md:hidden">
    //         <ArrowButton direction="right" label="View Menu"></ArrowButton>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section className="relative grid min-h-svh md:grid-cols-2">
      {/* Left: Main image */}
      <div className="relative min-h-svh w-full md:min-h-full">
        <Image
          src="/mainImage.jpg"
          alt="Hero Image"
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      {/* Right: Side image + button (desktop only) */}
      <div className="relative hidden w-full p-6 md:block md:p-20">
        <div className="absolute right-6 top-24 w-[260px] aspect-5/3 md:right-20 md:top-32 md:w-[450px]">
          <Image
            src="/sideImage.jpg"
            alt="side Image"
            fill
            sizes="(min-width: 768px) 450px, 0px"
            className="object-cover"
          />
        </div>
        <div className="flex h-full items-end justify-end gap-4">
          <ArrowButton direction="right" label="View Menu" />
        </div>
      </div>

      {/* Overlay: Title content */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-4">
        <div className="pointer-events-auto flex flex-col items-start md:items-start">
          <p className="font-sans text-base md:text-2xl  ">
            Bushrangers Bistro
          </p>

          <h1 className="font-serif leading-none  text-[clamp(60px,12vw,200px)] text-nowrap">
            The Crown Inn
          </h1>

          {/* Mobile button (only on small screens) */}
          <div className="mt-4 flex w-full justify-end md:hidden">
            <ArrowButton direction="right" label="View Menu" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
