import React from "react";

import image01 from "../assets/images/gtw1.png";
import image02 from "../assets/images/gtw2.png";
import image03 from "../assets/images/ms02.png";
import image04 from "../assets/images/mc1.jpg";
import image05 from "../assets/images/mc2.jpg";
import image06 from "../assets/images/ms04.png";
import image07 from "../assets/images/as1.png";
import image08 from "../assets/images/zero24.png";
import image09 from "../assets/images/as3.png";
import image10 from "../assets/images/zero22.png";
import image11 from "../assets/images/as5.png";
import image12 from "../assets/images/ms01.png";
import image13 from "../assets/images/as7.png";


const images = [image01, image03, image04,image02, image06, image07, image08, image09, image10, image11, image12, image13];

const InfiniteCarousel = () => {
  const duplicatedImages = [...images, ...images]; // For infinite loop illusion

  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-scroll-left whitespace-nowrap">
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[150px] h-[150px] md:w-[300px] md:h-[300px] mx-2 rounded-xl overflow-hidden"
          >
            <img
              src={image}
              alt={`carousel-${index}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
