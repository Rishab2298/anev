import React from "react";
import bgImage from "../assets/bgImage.avif";
import image01 from "../assets/image01.avif";
import image02 from "../assets/image02.avif";
import image03 from "../assets/image03.avif";
import image04 from "../assets/image04.webp";

const About = () => {
  return (
    <>
      <div className="w-full h-[300px] mt-[200px] flex flex-col justify-center items-center gap-[60px]">
        <span className="text-white text-[20px] poppins-thin uppercase">
          About
        </span>
        <span className="text-white text-[120px] w-full justify-center leading-[110px]  font-normal  flex items-center uppercase text-center">
          We Are Ajan
        </span>
      </div>

      <div className="w-full h-screen flex gap-[60px] px-[60px] pt-[60px] justify-center">
        <div className="h-full flex justify-center items-center text-[20px] text-center text-white">
          <span>Fundamentally we are storytellers</span>
        </div>
        <div className="w-2/5  rounded-[60px] cover relative overflow-hidden">
          <img
            src={bgImage}
            alt="about"
            className="rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
          />
          <div className="artist z-0">0</div>
        </div>
        <div className="h-full flex justify-center items-center text-[20px] text-center text-white">
          <span>Functionally we are a powerhouse</span>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center text-[30px] gap-[60px] text-white poppins-thin my-[200px]">
        <span className="text-center w-2/3">
          AJAN was birthed to help aid and assist in effective digital media
          production and branding.
        </span>
        <span className="text-center w-2/3">
          The problem was clear, though digitisation is happening at a rampant
          pace, we're only scratching the surface of the countless businesses
          that need to evolve to a digital first economy.{" "}
        </span>
        <span className="text-center w-2/3">
          The sheer volume of this, coupled with a lack of organised talent &
          structure for creating & maintaining a digital presence was the reason
          AJAN came into being.{" "}
        </span>
      </div>

      <div className="w-full flex flex-col justify-center items-center text-[30px] gap-[0px] text-white poppins-thin my-[200px]">
        <div className="w-fit flex gap-[50px]">
          <div className="w-[250px] rounded-full overflow-hidden relative">
            <img
              src={image01}
              className="relative opacity-90 w-full h-[120px] object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
            />
            <div className="artist z-0">0</div>
          </div>
          <span className="text-[100px] font-normal leading-[90px] flex items-center text-white uppercase">
            LOVE + TRUST
          </span>
        </div>
        <div className="w-fit flex gap-[50px]">
        <span className="text-[100px] font-normal leading-[90px] flex items-center text-white uppercase">
           Rapid MGMT
          </span>
          <div className="w-[250px] rounded-full overflow-hidden relative">
            <img
              src={image02}
              className="relative opacity-90 w-full h-[120px] object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
            />
            <div className="artist z-0">0</div>
          </div>
         
        </div>
        <div className="w-fit flex gap-[50px]">
          <div className="w-[250px] rounded-full overflow-hidden relative">
            <img
              src={image03}
              className="relative opacity-90 w-full h-[120px] object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
            />
            <div className="artist z-0">0</div>
          </div>
          <span className="text-[100px] font-normal leading-[90px] flex items-center text-white uppercase">
            LOVE + TRUST
          </span>
        </div>
        <div className="w-fit flex gap-[50px]">
        <span className="text-[100px] font-normal leading-[90px] flex items-center text-white uppercase">
           Rapid MGMT
          </span>
          <div className="w-[250px] rounded-full overflow-hidden relative">
            <img
              src={image04}
              className="relative opacity-90 w-full h-[120px] object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
            />
            <div className="artist z-0">0</div>
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

export default About;
