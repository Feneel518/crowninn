import { FC } from "react";
import ArrowButton from "../global/ArrowButton";
import Image from "next/image";
import SectionComponent from "../global/SectionComponent";
import Heading from "../global/Heading";

interface OurMenuProps {}

const OurMenu: FC<OurMenuProps> = ({}) => {
  return (
    <SectionComponent className="relative flex flex-col gap-12">
      <Heading label="Our Menu"></Heading>
      <div className="grid md:grid-cols-10 gap-6 md:gap-12  relative">
        {/* Big card */}
        <MenuCard
          className="md:col-span-4"
          title="Main dishes"
          img="/mainImage.jpg"
        />

        {/* Small card 1 */}
        <MenuCard
          className="md:col-span-3 "
          title="Salads"
          img="/mainImage.jpg"
          small
        />

        {/* Small card 2 */}
        <MenuCard
          className="md:col-span-3 "
          title="Desserts"
          img="/mainImage.jpg"
          small
        />
        <div className="absolute right-0 bottom-0 md:flex hidden ">
          <ArrowButton direction="right" label="Full Menu" />{" "}
        </div>
      </div>
      <div className="md:hidden ">
        <ArrowButton direction="right" label="Full Menu" />{" "}
      </div>
    </SectionComponent>
  );
};

export default OurMenu;

function MenuCard({
  title,
  img,
  small,
  className = "",
}: {
  title: string;
  img: string;
  small?: boolean;
  className?: string;
}) {
  return (
    <div
      className={[
        "group relative overflow-hidden  ring-1 ring-white/10 ",
        className,
      ].join(" ")}>
      {/* Use aspect ratios instead of % heights */}
      <div
        className={[
          "relative w-full rounded-sm",
          small ? "aspect-7/4" : "aspect-5/4 max-md:aspect-6/4",
        ].join(" ")}>
        <Image src={img} alt={title} fill className="object-cover rounded-sm" />
        {/* soft overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent rounded-sm" />
        <p className="absolute bottom-4 left-4 text-base text-white/90 md:bottom-5 md:left-5 md:text-lg rounded-sm">
          {title}
        </p>
      </div>
    </div>
  );
}
