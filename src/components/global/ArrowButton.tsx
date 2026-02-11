import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

interface ArrowButtonProps {
  label: string;
  direction: "left" | "right";
  className?: string;
}

const ArrowButton: FC<ArrowButtonProps> = ({
  direction = "right",
  label,
  className,
}) => {
  return (
    <div
      className={cn(
        `group flex cursor-pointer items-center z-40 gap-2 p-2 `,
        className,
      )}>
      <div
        className={`relative h-4 w-[200px] shrink-0 inline-block translate-x-0 transition-transform duration-300 ${direction === "left" ? "group-hover:-translate-x-2" : "group-hover:translate-x-2"}`}>
        <Image
          src="/Arrow.svg"
          alt="Arrow"
          fill
          className={`object-contain ${direction === "left" ? "-rotate-180" : "rotate-0"}`}
        />
      </div>

      <div
        className={`h-4 flex items-center justify-center  translate-x-0 transition-transform duration-300 ${direction === "left" ? "group-hover:-translate-x-2" : "group-hover:translate-x-2"}`}>
        {label}
      </div>
    </div>
  );
};

export default ArrowButton;
