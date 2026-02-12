import { FC } from "react";
import SectionComponent from "../global/SectionComponent";
import Heading from "../global/Heading";
import Image from "next/image";
import ArrowButton from "../global/ArrowButton";

interface FunctionDetailsNeededProps {}

//   {[
//                   { icon: CalendarCheck, title: "Preferred date & time" },
//                   { icon: Users, title: "Approx guest count" },
//                   {
//                     icon: Utensils,
//                     title: "Food style (packages / à la carte)",
//                   },
//                   { icon: Sparkles, title: "Occasion & any special requests" },
//                 ]

const FunctionDetailsNeeded: FC<FunctionDetailsNeededProps> = ({}) => {
  return (
    <>
      <SectionComponent>
        <Heading label="Our Needs"></Heading>
      </SectionComponent>
      <div className="grid grid-cols-2 md:grid-cols-4 -mt-6 gap-6 max-md:mt-6 max-md:p-4">
        <div className="w-full aspect-5/4 relative">
          <Image
            src={"/mainImage.jpg"}
            alt="image"
            fill
            className="object-cover"></Image>
        </div>
        <div className="w-full aspect-5/4 relative flex items-center justify-center">
          <h3 className="font-serif uppercase text-[clamp(20px,6vw,40px)] leading-tight text-center">
            Preferred date & time
          </h3>
        </div>
        <div className="w-full aspect-5/4 relative">
          <Image
            src={"/mainImage.jpg"}
            alt="image"
            fill
            className="object-cover"></Image>
        </div>
        <div className="w-full aspect-5/4 relative flex items-center justify-center">
          <h3 className="font-serif uppercase text-[clamp(20px,6vw,40px)] leading-tight text-center">
            Approx guest count
          </h3>
        </div>
        <div className="w-full aspect-5/4 relative flex items-center justify-center">
          <h3 className="font-serif uppercase text-[clamp(20px,6vw,40px)] leading-tight text-center">
            Food style (packages / à la carte)
          </h3>
        </div>
        <div className="w-full aspect-5/4 relative">
          <Image
            src={"/mainImage.jpg"}
            alt="image"
            fill
            className="object-cover"></Image>
        </div>
        <div className="w-full aspect-5/4 relative flex items-center justify-center">
          <h3 className="font-serif uppercase text-[clamp(20px,6vw,40px)] leading-tight text-center">
            Occasion & any special requests
          </h3>
        </div>
        <div className="w-full aspect-5/4 relative">
          <Image
            src={"/mainImage.jpg"}
            alt="image"
            fill
            className="object-cover"></Image>
        </div>
      </div>

      <div className="w-full flex items-center md:justify-end px-6 pt-10  md:px-12 lg:px-20 ">
        <ArrowButton direction="right" label="Enquire"></ArrowButton>
      </div>
    </>
  );
};

export default FunctionDetailsNeeded;
