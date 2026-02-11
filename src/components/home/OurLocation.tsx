import { FC } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import MapboxMap from "../global/MapBox";
import Heading from "../global/Heading";
import SectionComponent from "../global/SectionComponent";
import Image from "next/image";
import { CONTACTEMAIL } from "@/lib/constants/contactConstants";

interface OurLocationProps {}

const OurLocation: FC<OurLocationProps> = ({}) => {
  // Replace with Crown Inn coordinates (Pontville)

  const lat = -42.68448319849066;
  const lng = 147.26557048966598;

  const gmailLink =
    typeof window !== "undefined" &&
    /Android|iPhone|iPad/i.test(navigator.userAgent)
      ? `googlegmail://co?to=${encodeURIComponent(CONTACTEMAIL.recepient)}&su=${encodeURIComponent(CONTACTEMAIL.subject)}&body=${encodeURIComponent(CONTACTEMAIL.body)}`
      : `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACTEMAIL.recepient)}&su=${encodeURIComponent(CONTACTEMAIL.subject)}&body=${encodeURIComponent(CONTACTEMAIL.body)}`;
  return (
    <SectionComponent className="pt-20 ">
      <Heading label="Our location"></Heading>
      <div className="grid gap-12 md:grid-cols-3 md:items-start">
        <aside className="md:col-span-2">
          <MapboxMap lat={lat} lng={lng} markerLabel="The Crown Inn" />
        </aside>
        <aside className="flex items-start flex-col gap-12 h-full w-full font-mono md:justify-between ">
          <div className=" space-y-4  text-base  ">
            <p>
              <span className="font-semibold">WORKING HOURS: </span>Monday -
              Sunday, 10:00 - 23:00
            </p>
            <p>
              <span className="font-semibold">ADDRESS: </span>
              <Link
                href={`https://www.google.com/maps?q=${lat},${lng}`}
                target="_blank">
                365 Brighton Road, Pontville Tasmania 7030
              </Link>
            </p>
            <p>
              <span className="font-semibold">EMAIL: </span>
              <Link href={gmailLink} target="_blank" rel="noopener noreferrer">
                info@crowninn.com.au
              </Link>
            </p>
            <p>
              <span className="font-semibold">PHONE: </span>{" "}
              <Link href={"tel:+0362681235"}>+(03) 6268 1235</Link>
            </p>
          </div>

          <div className="relative w-full  aspect-16/8 ">
            <Image
              src={"/BookTable.jpg"}
              alt="image"
              fill
              className="object-cover rounded-sm"></Image>
          </div>
        </aside>
      </div>
      {/* <div className="grid gap-10 md:grid-cols-2 md:items-start ">
        <div>
          <h2 className="font-serif text-[clamp(42px,8vw,100px)]">
            OUR LOCATION
          </h2>
          <p className="mt-4 text-sm md:text-base">
            The Crown Inn, Pontville. Drop in for a meal, a drink, or a catch-up
            — open 7 days.
          </p>

          <div className="mt-6 space-y-2 text-sm ">
            <p>
              <span className="">Address:</span> Pontville, TAS
            </p>
            <p>
              <span className="">Hours:</span> 11:30am – late
            </p>
          </div>

          <div className="mt-8 flex gap-3">
            <Button asChild>
              <Link
                href={`https://www.google.com/maps?q=${lat},${lng}`}
                target="_blank">
                Get Directions
              </Link>
            </Button>

            <Button asChild variant="outline">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>

        <MapboxMap lat={lat} lng={lng} markerLabel="The Crown Inn" />
      </div> */}
    </SectionComponent>
  );
};

export default OurLocation;
