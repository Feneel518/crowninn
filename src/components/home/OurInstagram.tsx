import Image from "next/image";
import { FC } from "react";
import ArrowButton from "../global/ArrowButton";
import SectionComponent from "../global/SectionComponent";
import Heading from "../global/Heading";

interface OurInstagramProps {}

const OurInstagram: FC<OurInstagramProps> = ({}) => {
  return (
    <SectionComponent>
      <Heading
        label="Our Instagram"
        className="text-wrap leading-tight"></Heading>
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
        <div className="absolute md:right-0 bottom-0 max-md:-bottom-12">
          <ArrowButton direction="right" label="Follow Us"></ArrowButton>
        </div>
      </div>
    </SectionComponent>
  );
};

export default OurInstagram;
