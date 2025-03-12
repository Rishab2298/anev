import React from "react";
import video001 from "../assets/video001.mp4";
import video002 from "../assets/video002.webm";
import video003 from "../assets/video003.webm";
import video004 from "../assets/video004.webm";
import image001 from "../assets/image001.avif";
import image002 from "../assets/image002.avif";
import image003 from "../assets/image003.avif";
import image004 from "../assets/image004.avif";
import image005 from "../assets/image005.avif";
import image006 from "../assets/image006.avif";
import image007 from "../assets/image007.avif";
import image008 from "../assets/image008.avif";
import image009 from "../assets/image009.avif";
import image010 from "../assets/image010.avif";

const Work = () => {
  return (
    <>
      {/* Hero Text */}
      <div className="w-full min-h-screen bg-black flex flex-col justify-center items-center gap-[4px]">
        <span className="text-white text-[150px] poppins-normal uppercase">
          Explore Our
        </span>

        <span className="text-white text-[20px] w-1/2 poppins-thin text-center">
          A showcase of our best concept work, highlighting our approach to a
          unique visual language, and our skillset in understanding effective
          media production.
        </span>
        <span className="text-white text-[150px] poppins-normal uppercase">
          Playground
        </span>
      </div>
      {/* work with 1 item */}
      <div className="w-full flex flex-col items-center gap-[200px] justify-center">

        {/* Item 1 */}
        <div className="w-3/4 h-fit-content flex flex-col items-center gap-[4px]">
          <div className="rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10">
              <source src={video001} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-full h-fit flex flex-col pt-4 pl-14">
            <span className="text-[16px] text-white font-thin">PODCAST</span>
            <span className="text-[30px] text-white font-thin">WTF IS?</span>
          </div>
        </div>

        {/* Item 2 */}
        <div className="w-3/4 h-fit-content flex flex-col items-center gap-[4px]">
          <div className="rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10">
              <source src={video002} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-full h-fit flex flex-col pt-4 pl-14">
            <span className="text-[16px] text-white font-thin uppercase">brand films</span>
            <span className="text-[30px] text-white font-thin uppercase">Schevaran Labs</span>
          </div>
        </div>

{/* Item 3 */}
<div className="w-3/4 h-fit-content flex flex-col items-center gap-[4px]">
          <div className="rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10">
              <source src={video003} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-full h-fit flex flex-col pt-4 pl-14">
            <span className="text-[16px] text-white font-thin uppercase">brand films</span>
            <span className="text-[30px] text-white font-thin uppercase">FIGMA X Swiggy</span>
          </div>
        </div>

        {/* Item 4 image grid 2*/}

        <div className="w-3/4 h-fit flex items-center gap-[40px] ">
        <div style={{ width: "calc(50% - 20px)" }} className="flex flex-col ">

            <div className="rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square" >
                <img src={image001} alt="image001" className="rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10" />
                </div>
                <div className="w-full h-fit flex flex-col pt-4 pl-14">
            <span className="text-[16px] text-white font-thin uppercase">brand films</span>
            <span className="text-[30px] text-white font-thin uppercase">FIGMA X Swiggy</span>
          </div>
        </div>
        <div style={{ width: "calc(50% - 20px)" }} className="flex flex-col">

<div className="rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square" >
    <img src={image002} alt="image001" className="rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10" />
    </div>
    <div className="w-full h-fit flex flex-col pt-4 pl-14">
            <span className="text-[16px] text-white font-thin uppercase">brand films</span>
            <span className="text-[30px] text-white font-thin uppercase">FIGMA X Swiggy</span>
          </div>
</div>
        </div>

        {/* Item 5 Image Grid 3 */}
        <div className="w-3/4 h-fit flex items-center gap-[20px] ">
        <div style={{ width: "calc(33% - 10px)" }} className="flex flex-col ">

            <div className="rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square" >
                <img src={image003} alt="image001" className="rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10" />
                </div>
                <div className="w-full h-fit flex flex-col pt-4 pl-14">
            <span className="text-[16px] text-white font-thin uppercase">brand films</span>
            <span className="text-[30px] text-white font-thin uppercase">FIGMA X Swiggy</span>
          </div>
        </div>
        <div style={{ width: "calc(33% - 10px)" }} className="flex flex-col">

<div className="rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square" >
    <img src={image004} alt="image001" className="rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10" />
    </div>
    <div className="w-full h-fit flex flex-col pt-4 pl-14">
            <span className="text-[16px] text-white font-thin uppercase">brand films</span>
            <span className="text-[30px] text-white font-thin uppercase">FIGMA X Swiggy</span>
          </div>
</div>
<div style={{ width: "calc(33% - 10px)" }} className="flex flex-col">

<div className="rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square" >
    <img src={image005} alt="image001" className="rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10" />
    </div>
    <div className="w-full h-fit flex flex-col pt-4 pl-14">
            <span className="text-[16px] text-white font-thin uppercase">brand films</span>
            <span className="text-[30px] text-white font-thin uppercase">FIGMA X Swiggy</span>
          </div>
</div>
        </div>
          {/* Item 6 Video Grid 1 */}
          <div className="w-3/4 h-fit-content flex flex-col items-center gap-[4px]">
          <div className="rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10">
              <source src={video004} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-full h-fit flex flex-col pt-4 pl-14">
            <span className="text-[16px] text-white font-thin">PODCAST</span>
            <span className="text-[30px] text-white font-thin">WTF IS?</span>
          </div>
        </div>
         {/* Item 7 Image Grid 3 */}
         <div className="w-3/4 h-fit flex items-center gap-[20px] ">
        <div style={{ width: "calc(33% - 10px)" }} className="flex flex-col ">

            <div className="rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square" >
                <img src={image006} alt="image001" className="rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10" />
                </div>
                <div className="w-full h-fit flex flex-col pt-4 pl-14">
            <span className="text-[16px] text-white font-thin uppercase">brand films</span>
            <span className="text-[30px] text-white font-thin uppercase">FIGMA X Swiggy</span>
          </div>
        </div>
        <div style={{ width: "calc(33% - 10px)" }} className="flex flex-col">

<div className="rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square" >
    <img src={image007} alt="image001" className="rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10" />
    </div>
    <div className="w-full h-fit flex flex-col pt-4 pl-14">
            <span className="text-[16px] text-white font-thin uppercase">brand films</span>
            <span className="text-[30px] text-white font-thin uppercase">FIGMA X Swiggy</span>
          </div>
</div>
<div style={{ width: "calc(33% - 10px)" }} className="flex flex-col">

<div className="rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square" >
    <img src={image008} alt="image001" className="rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10" />
    </div>
    <div className="w-full h-fit flex flex-col pt-4 pl-14">
            <span className="text-[16px] text-white font-thin uppercase">brand films</span>
            <span className="text-[30px] text-white font-thin uppercase">FIGMA X Swiggy</span>
          </div>
</div>
        </div>

        {/* Item 8 image grid 2*/}

        <div className="w-3/4 h-fit flex items-center gap-[40px] ">
        <div style={{ width: "calc(50% - 20px)" }} className="flex flex-col ">

            <div className="rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square" >
                <img src={image009} alt="image001" className="rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10" />
                </div>
                <div className="w-full h-fit flex flex-col pt-4 pl-14">
            <span className="text-[16px] text-white font-thin uppercase">brand films</span>
            <span className="text-[30px] text-white font-thin uppercase">FIGMA X Swiggy</span>
          </div>
        </div>
        <div style={{ width: "calc(50% - 20px)" }} className="flex flex-col">

<div className="rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square" >
    <img src={image010} alt="image001" className="rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10" />
    </div>
    <div className="w-full h-fit flex flex-col pt-4 pl-14">
            <span className="text-[16px] text-white font-thin uppercase">brand films</span>
            <span className="text-[30px] text-white font-thin uppercase">FIGMA X Swiggy</span>
          </div>
</div>
        </div>
      </div>

      {/* Call To Action */}

      <div className="w-full min-h-screen  flex flex-col justify-center items-center gap-[60px]">
        <span className="text-white text-[20px] poppins-thin uppercase">
            Contact
        </span>
        <span className="text-white text-[120px] w-3/4 leading-[110px]  poppins-normal uppercase text-center">
          Have a cool project?
        </span>
        <button className="buttonr px-16 py-5 text-2xl rounded-full poppins-light ">Let's Talk!</button>
        </div>
    </>
  );
};

export default Work;
