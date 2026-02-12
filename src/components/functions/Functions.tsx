import Image from "next/image";
import { FC } from "react";
import ArrowButton from "../global/ArrowButton";
import Heading from "../global/Heading";
import SectionComponent from "../global/SectionComponent";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

interface FunctionsProps {}
type FunctionType = {
  title: string;
  subtitle: string;
  image: string;
  bullets: string[];
};

const FUNCTION_TYPES: FunctionType[] = [
  {
    title: "Birthdays",
    subtitle: "Celebrate with great food, drinks, and warm pub vibes.",
    image: "/sideImage.jpg",
    bullets: [
      "Reserved seating",
      "Custom food packages",
      "Cake-friendly options",
    ],
  },
  {
    title: "Engagements",
    subtitle: "A relaxed space for your special moment—done beautifully.",
    image: "/sideImage.jpg",
    bullets: [
      "Private corner options",
      "Table styling add-ons",
      "Flexible menu",
    ],
  },
  {
    title: "Corporate & Team Nights",
    subtitle: "Easy planning, seamless service, and plenty of room to unwind.",
    image: "/sideImage.jpg",
    bullets: ["Group tabs", "Pre-order menu", "Fast service setup"],
  },
  {
    title: "Family Gatherings",
    subtitle: "Comfortable, friendly, and perfect for all ages.",
    image: "/sideImage.jpg",
    bullets: ["Family-friendly seating", "Kids options", "Easy parking access"],
  },
];

const Functions: FC<FunctionsProps> = ({}) => {
  return (
    <SectionComponent>
      <Heading
        label="Our Functions    "
        className="text-wrap leading-tight"></Heading>
      <div className="grid md:grid-cols-4 gap-8 relative ">
        {FUNCTION_TYPES.map((f) => {
          return (
            <div className=" w-full  relative  ">
              <Card
                key={f.title}
                className="group overflow-hidden h-full p-0 rounded-sm relative">
                <div className="pointer-events-none absolute inset-0 opacity-70">
                  <div className="absolute -bottom-64 left-2/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full blur-3xl bg-red-700/20" />
                </div>
                <div className="relative aspect-video min-h-52 w-full overflow-hidden">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background/95 to-transparent" />
                </div>

                <CardContent className="flex justify-between flex-col h-full p-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-lg font-semibold">{f.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {f.subtitle}
                      </p>
                    </div>

                    <ul className="space-y-2">
                      {f.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm">
                          <span className="mt-0.5 rounded-full border bg-card p-1">
                            <Check className="h-3.5 w-3.5 text-primary" />
                          </span>
                          <span className="text-muted-foreground">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="w-full" variant={"elegant"}>
                    <Link href="/contact">Enquire </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </SectionComponent>
  );
};

export default Functions;

// {
//   FUNCTION_TYPES.map((f) => (
//     <Card key={f.title} className="group overflow-hidden rounded-2xl">
//       <div className="relative h-52 w-full">
//         <Image
//           src={f.image}
//           alt={f.title}
//           fill
//           className="object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//         <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/95 to-transparent" />
//       </div>

//       <CardContent className="space-y-4 p-6">
//         <div>
//           <p className="text-lg font-semibold">{f.title}</p>
//           <p className="mt-1 text-sm text-muted-foreground">{f.subtitle}</p>
//         </div>

//         <ul className="space-y-2">
//           {f.bullets.map((b) => (
//             <li key={b} className="flex items-start gap-2 text-sm">
//               <span className="mt-0.5 rounded-full border bg-card p-1">
//                 <Check className="h-3.5 w-3.5 text-primary" />
//               </span>
//               <span className="text-muted-foreground">{b}</span>
//             </li>
//           ))}
//         </ul>

//         <Button asChild className="w-full">
//           <Link href="/contact">Enquire for {f.title}</Link>
//         </Button>
//       </CardContent>
//     </Card>
//   ));
// }
