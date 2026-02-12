import { FC } from "react";
import SectionComponent from "../global/SectionComponent";
import Heading from "../global/Heading";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface FunctionFAQProps {}

const FAQ = [
  {
    q: "How far in advance should I book?",
    a: "For weekends, we recommend booking 2–3 weeks ahead. For larger groups and special dates, earlier is better.",
  },
  {
    q: "Do you offer set menus or can we order à la carte?",
    a: "Both. Smaller groups can order from the menu, while larger parties often prefer packages for smoother service.",
  },
  {
    q: "Can we bring a cake?",
    a: "Yes. Let us know in advance and we’ll help with serving options.",
  },
  {
    q: "Are decorations allowed?",
    a: "Light decorations are usually fine—please check with us for anything that needs setup time or wall fixtures.",
  },
];

const FunctionFAQ: FC<FunctionFAQProps> = ({}) => {
  return (
    <SectionComponent>
      <Heading label="FAQS"></Heading>
      <div className="grid grid-cols-3 gap-12">
        <div className="w-full min-h-[550px] h-full relative">
          <Image
            src={"/Book.jpg"}
            alt="image"
            fill
            className="object-cover"></Image>
        </div>
        <div className="col-span-2">
          <Heading label="Basic Questions"></Heading>
          <Accordion
            type="single"
            collapsible
            defaultValue="shipping"
            className="mt-4">
            {FAQ.map((f, index) => {
              return (
                <AccordionItem value={f.q}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </SectionComponent>
  );
};

export default FunctionFAQ;
