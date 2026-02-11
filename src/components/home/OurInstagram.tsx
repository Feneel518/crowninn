import Image from "next/image";
import { FC } from "react";
import ArrowButton from "../global/ArrowButton";

interface OurInstagramProps {}

const OurInstagram: FC<OurInstagramProps> = ({}) => {
  return (
    <section className="relative px-6 pb-16 pt-10 md:px-20 md:pb-20 md:pt-16 space-y-8 ">
      <h2 className="font-serif text-[clamp(60px,12vw,100px)] ">
        OUR INSTAGRAM
      </h2>
      <div className="grid md:grid-cols-4 gap-8 relative ">
        <div className="h-[350px] w-full  relative">
          <Image
            src={"/sideImage.jpg"}
            alt="image"
            fill
            className="object-cover"></Image>
        </div>
        <div className="h-[500px] max-md:h-[350px] w-full relative">
          <Image
            src={"/sideImage.jpg"}
            alt="image"
            fill
            className="object-cover"></Image>
        </div>
        <div className="h-[400px] max-md:h-[350px] w-full relative place-self-end">
          <Image
            src={"/sideImage.jpg"}
            alt="image"
            fill
            className="object-cover"></Image>
        </div>
        <div className="h-[400px] max-md:h-[350px] w-full relative">
          <Image
            src={"/sideImage.jpg"}
            alt="image"
            fill
            className="object-cover"></Image>
        </div>
        <div className="absolute right-0 bottom-0 max-md:-bottom-12">
          <ArrowButton direction="right" label="Follow Us"></ArrowButton>
        </div>
      </div>
    </section>
  );
};

export default OurInstagram;
