import React from "react";
import "./CarouselRight.css";
import logo1 from "../assets/logo1.webp";
import logo2 from "../assets/logo2.webp";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.webp";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.webp";
import logo7 from "../assets/logo7.png";
import logo8 from "../assets/logo8.webp";
import logo9 from "../assets/logo9.jpg";
import logo10 from "../assets/logo10.webp";

import video1 from "../assets/1.webm";
import video2 from "../assets/2.webm";
import video3 from "../assets/3.mp4";
import video4 from "../assets/4.webm";
import video5 from "../assets/5.webm";

const InfiniteCarouselRight = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];
  const videos = [video1, video2, video3, video4, video5,video1, video2,];

  return (
    <>
   
      <div className="slidera" style={{ "--width": "225px", "--height": "225px", "--quantity": videos.length }}>
        <div className="list">
          {videos.map((logo, index) => (
            <div key={index} className="item" style={{ "--position": index + 1 }}>
              <video className=" rounded-[40px] object-cover h-full" autoPlay muted loop preload="auto">
  <source src={logo} type="video/webm" />
  <source src={logo} type="video/mp4" />
  Your browser does not support the video tag.
</video>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="slider" data-reverse="true" style={{ "--width": "100px", "--height": "50px", "--quantity": logos.length }}>
        <div className="list">
          {logos.map((logo, index) => (
            <div key={index} className="item" style={{ "--position": index + 1 }}>
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default InfiniteCarouselRight;
