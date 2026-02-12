import { FC } from "react";
import SectionComponent from "../global/SectionComponent";
import Heading from "../global/Heading";
import DynamicMosaic from "./DynamicMosaic";

interface PentvilleGalleryProps {}

const PentvilleGallery: FC<PentvilleGalleryProps> = ({}) => {
  const images = [
    { src: "/mainImage.jpg", alt: "Dining room", width: 1600, height: 1067 },
    { src: "/sideImage.jpg", alt: "Bar", width: 1200, height: 1600 },
    { src: "/Book.jpg", alt: "Outdoor", width: 1600, height: 900 },
    { src: "/BookTable.jpg", alt: "Food", width: 1200, height: 900 },
    { src: "/BookATable.jpg", alt: "Live music", width: 1200, height: 1800 },
    { src: "/BookTable.jpg", alt: "Food", width: 1200, height: 900 },
    { src: "/mainImage.jpg", alt: "Dining room", width: 1600, height: 1067 },
    { src: "/Book.jpg", alt: "Outdoor", width: 1600, height: 900 },
    { src: "/sideImage.jpg", alt: "Bar", width: 1200, height: 1600 },
    { src: "/BookATable.jpg", alt: "Live music", width: 1200, height: 1800 },
  ];
  return (
    <SectionComponent>
      <Heading label="Our Gallery"></Heading>
      <div className="">
        <DynamicMosaic
          images={images}
          columnsClassName="columns-1 sm:columns-2 lg:columns-3 xl:columns-4"
        />
      </div>
    </SectionComponent>
  );
};

export default PentvilleGallery;
