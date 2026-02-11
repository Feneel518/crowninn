import { FC } from "react";
import ArrowButton from "../global/ArrowButton";
import Image from "next/image";

interface OurMenuProps {}

const OurMenu: FC<OurMenuProps> = ({}) => {
  return (
    // <section className=" relative min-h-svh  md:min-h-svh px-6 md:px-20 pb-16 md:pb-20 ">
    //   <h2 className="text-[clamp(60px,12vw,180px)] font-serif">Our Menu</h2>
    //   <div className="grid col-span-1 md:grid-cols-10  gap-8 relative">
    //     <div className="md:col-span-4 max-md:h-72 relative">
    //       <Image
    //         src={"/mainImage.jpg"}
    //         alt="main Image"
    //         fill
    //         className="object-cover"></Image>
    //     </div>
    //     <div className="md:col-span-3 max-md:h-72   md:h-[70%] relative">
    //       <Image
    //         src={"/mainImage.jpg"}
    //         alt="main Image"
    //         fill
    //         className="object-cover"></Image>
    //     </div>
    //     <div className="md:col-span-3 max-md:h-72  md:h-[70%] relative">
    //       <Image
    //         src={"/mainImage.jpg"}
    //         alt="main Image"
    //         fill
    //         className="object-cover"></Image>
    //     </div>
    //     <div className="absolute  max-md:-bottom-20 bottom-0 md:right-0">
    //       <ArrowButton direction="right" label="Full Menu"></ArrowButton>
    //     </div>
    //   </div>
    // </section>

    <section className="relative px-6 pb-16 pt-10 md:px-20 md:pb-20 md:pt-16">
      <h2 className="font-serif text-[clamp(60px,12vw,180px)] ">OUR MENU</h2>

      <div className="relative  grid gap-6 md:grid-cols-10 md:gap-10">
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

        {/* Spacer column to match right breathing space (like screenshot) */}
        <div className="hidden md:block md:col-span-1" />

        {/* CTA row */}
        <div className="md:-mt-12 flex justify-end md:col-span-10">
          <ArrowButton direction="right" label="Full Menu" />
        </div>
      </div>
    </section>
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
        "group relative overflow-hidden  ring-1 ring-white/10",
        className,
      ].join(" ")}>
      {/* Use aspect ratios instead of % heights */}
      <div
        className={[
          "relative w-full",
          small ? "aspect-16/10" : "aspect-4/3",
        ].join(" ")}>
        <Image src={img} alt={title} fill className="object-cover" />
        {/* soft overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />
        <p className="absolute bottom-4 left-4 text-base text-white/90 md:bottom-5 md:left-5 md:text-lg">
          {title}
        </p>
      </div>
    </div>
  );
}
