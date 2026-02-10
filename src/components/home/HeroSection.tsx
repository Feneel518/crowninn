import Image from "next/image";
import { FC } from "react";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <div className="h-screen grid grid-cols-2 relative">
      <div className="relative h-full w-full">
        <Image
          src={"/mainImage.jpg"}
          alt="Hero Image"
          fill
          className="object-cover"></Image>
      </div>
      <div className="relative p-20">
        <div className="absolute w-[450px] aspect-5/3 bg-black right-20 top-32 ">
          <Image src={"/sideImage.jpg"} alt="side Image" fill></Image>
        </div>
        <div className="h-full  flex items-end justify-end gap-4">
          <div className="flex gap-2 group cursor-pointer p-2 bg-red-300">
            <div className="w-[200px] h-4 relative  ">
              <Image
                src={"/Arrow.svg"}
                alt="Arrow"
                fill
                className="object-contain group-hover:translate-x-2"></Image>
            </div>
            <div className="h-4 flex items-center justify-center">
              View Menu
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center ">
        <div className="flex flex-col mt-8">
          <p className="text-2xl font-sans -mb-8">Bushrangers Bistro</p>
          <h1 className="text-[200px] font-serif ">The Crown Inn</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
