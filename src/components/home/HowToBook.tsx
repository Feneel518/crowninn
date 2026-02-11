import Image from "next/image";
import { FC } from "react";
import { Button } from "../ui/button";

interface HowToBookProps {}

const HowToBook: FC<HowToBookProps> = ({}) => {
  return (
    <div className="">
      <div className="w-full max-md:h-screen md:aspect-3/1 relative">
        <div className="absolute flex items-center justify-center inset-0  z-30">
          <div className="md:w-[70%] md:h-[60%] h-full bg-background/50 md:bg-background/80 md:backdrop-blur-xs flex items-center justify-center flex-col gap-4 max-md:p-8">
            <h3 className="text-[clamp(40px,10vw,100px)] font-serif leading-tight uppercase text-center">
              How to book a table
            </h3>
            <p className="md:text-xl md:w-1/2 text-center">
              We look forward to creating you a memorable experience just for
              you, Reserve your table, just by clicking the button below!{" "}
            </p>
            <Button variant={"elegant"} className="w-80 mt-8">
              Book a Table
            </Button>
          </div>
        </div>
        <Image
          src={"/Book.jpg"}
          alt="Book Table"
          fill
          className="object-cover origin-bottom"></Image>
      </div>
    </div>
  );
};

export default HowToBook;
