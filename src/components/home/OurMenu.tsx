import { FC } from "react";
import ArrowButton from "../global/ArrowButton";
import Image from "next/image";

interface OurMenuProps {}

const OurMenu: FC<OurMenuProps> = ({}) => {
  return (
    <section className=" relative min-h-svh  md:min-h-svh px-6 md:px-20 pb-16 md:pb-20 ">
      <h2 className="text-[clamp(60px,12vw,180px)] font-serif">Our Menu</h2>
      <div className="grid col-span-1 md:grid-cols-10 min-h-svh gap-8 relative">
        <div className="md:col-span-4 max-md:h-72 relative">
          <Image
            src={"/mainImage.jpg"}
            alt="main Image"
            fill
            className="object-cover"></Image>
        </div>
        <div className="md:col-span-3 max-md:h-72   md:h-[70%] relative">
          <Image
            src={"/mainImage.jpg"}
            alt="main Image"
            fill
            className="object-cover"></Image>
        </div>
        <div className="md:col-span-3 max-md:h-72  md:h-[70%] relative">
          <Image
            src={"/mainImage.jpg"}
            alt="main Image"
            fill
            className="object-cover"></Image>
        </div>
        <div className="absolute  max-md:-bottom-20 bottom-0 md:right-0">
          <ArrowButton direction="right" label="Full Menu"></ArrowButton>
        </div>
      </div>
    </section>
  );
};

export default OurMenu;
