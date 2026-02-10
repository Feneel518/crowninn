import { FC } from "react";
import ArrowButton from "../global/ArrowButton";
import Image from "next/image";

interface AboutSectionProps {}

const AboutSection: FC<AboutSectionProps> = ({}) => {
  return (
    <div className="min-h-svh p-6 md:p-20 h-svh  ">
      <div className="grid md:grid-cols-2 h-full  ">
        <div className="flex flex-col  h-full  ">
          <div className="flex flex-col  h-full md:items-center">
            <h2 className="text-[clamp(60px,12vw,180px)] font-serif">
              ABOUT US
            </h2>

            <div className="flex flex-col gap-4 w-[88%] max-md:text-sm">
              <p>
                Established in 1835, The Crown Inn is a historic country pub in
                the heart of Pontville, offering genuine hospitality in a
                relaxed and welcoming setting. Loved by locals and visitors
                alike, it’s a place to unwind, connect, and enjoy the charm of a
                true country hotel.
              </p>
              <p>
                From coffee and cake to hearty bistro meals, relaxed bar
                service, and Keno, The Crown Inn caters to every occasion. Open
                seven days a week, we’re proud to continue a long-standing
                tradition of good food, friendly service, and community spirit.
              </p>
            </div>
          </div>
          <div className="md:px-12 hidden md:block">
            <ArrowButton direction="right" label="Learn More"></ArrowButton>
          </div>
        </div>
        <div className="grid grid-cols-2 md:items-end gap-4 md:gap-12 ">
          <div className="relative w-full aspect-5/4 md:aspect-square">
            <Image
              src={"/mainImage.jpg"}
              alt="About us image"
              className="object-cover"
              fill></Image>
          </div>
          <div className="relative w-full h-full md:h-[80%]">
            <Image
              src={"/sideImage.jpg"}
              alt="About us image"
              fill
              className="object-cover"></Image>
          </div>
        </div>
        <div className="mt-auto md:hidden">
          <ArrowButton direction="right" label="Learn More"></ArrowButton>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
