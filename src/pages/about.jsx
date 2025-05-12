import React from "react";
import bgImage from "../assets/iconMod.jpg";
import image01 from "../assets/images/01.webp";
import image02 from "../assets/images/02.webp";
import image03 from "../assets/images/03.webp";
import image04 from "../assets/images/04.webp";

const About = () => {
  return (
    <>
      <div className="w-full h-[300px] mt-[100px] md:mt-[200px] flex flex-col justify-center items-center gap-[25px] md:gap-[60px]">
        <span className="text-white text-[20px] poppins-thin uppercase">
          About
        </span>
        <span className="fonk text-[60px] md:text-[120px] leading-[60px] md:leading-normal uppercase text-center w-full text-transparent bg-clip-text font-medium  p-2  hatch-background">
          We Are ANEV
        </span>
      </div>

      <div className="w-full h-fit flex md:flex-row flex-col gap-[20px] md:gap-[60px] px-[60px] pt-[60px] justify-center items-center mt-0 md:mt-10 ">
        <div className="h-full flex justify-center items-center text-[20px] text-center text-white">
          <span>Fundamentally we are <br />storytellers</span>
        </div>
        <div className="w-full md:w-2/5  rounded-[60px] cover relative overflow-hidden">
          <img
            src={bgImage}
            alt="about"
            className="rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
          />
          <div className="artist z-0">0</div>
        </div>
        <div className="h-full flex justify-center items-center text-[20px] text-center text-white">
          <span>Functionally we are <br />a powerhouse</span>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center text-[20px] md:text-[30px] gap-[60px] text-white poppins-thin my-[200px]">
        <span className="text-center w-2/3">
          ANEV was born out of a simple but urgent need — to bridge the growing
          gap between brands and the digital-first world.
        </span>
        <span className="text-center w-2/3">
          While the wave of digitisation continues to surge, thousands of
          businesses are still struggling to build a real, resonant presence
          online.
        </span>
        <span className="text-center w-2/3">
          The challenge isn’t just speed — it’s quality, strategy, and execution
          at scale.
        </span>
        <span className="text-center w-2/3">
          A fragmented creative ecosystem, lack of organized talent, and absence
          of structured content systems made it harder for brands to truly
          thrive.
        </span>
        <span className="text-center w-2/3">
          ANEV was created to change that — to empower brands with bold
          storytelling, sharp strategy, and relentless execution — building not
          just digital footprints, but digital leadership.{" "}
        </span>
      </div>

      <div className="w-full flex flex-col justify-center items-center text-white poppins-thin my-[100px] sm:my-[200px]">
  {/* Row 1 */}
  <div className="w-fit flex flex-nowrap gap-[20px] sm:gap-[50px] items-center">
    <div className="w-[120px] sm:w-[250px] rounded-full overflow-hidden relative">
      <img
        src={image01}
        className="relative opacity-90 w-full h-[60px] sm:h-[120px] object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
      />
      <div className="artist z-0">0</div>
    </div>
    <span className="text-[30px] md:text-[100px] font-normal leading-[40px] sm:leading-[90px] flex items-center text-white uppercase fonk">
      ARTISINAL
    </span>
  </div>

  {/* Row 2 */}
  <div className="w-fit flex flex-nowrap gap-[20px] sm:gap-[50px] items-center   md:mt-[30px]">
    <span className="text-[30px] md:text-[100px] font-normal leading-[40px] sm:leading-[90px] flex items-center text-white uppercase fonk">
      NEXT GEN
    </span>
    <div className="w-[120px] sm:w-[250px] rounded-full overflow-hidden relative">
      <img
        src={image02}
        className="relative opacity-90 w-full h-[60px] sm:h-[120px] object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
      />
      <div className="artist z-0">0</div>
    </div>
  </div>

  {/* Row 3 */}
  <div className="w-fit flex flex-nowrap gap-[20px] sm:gap-[50px] items-center   md:mt-[30px]">
    <div className="w-[120px] sm:w-[250px] rounded-full overflow-hidden relative">
      <img
        src={image03}
        className="relative opacity-90 w-full h-[60px] sm:h-[120px] object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
      />
      <div className="artist z-0">0</div>
    </div>
    <span className="text-[30px] md:text-[100px] font-normal leading-[40px] sm:leading-[90px] flex items-center text-white uppercase fonk">
      EXPERIMENTAL
    </span>
  </div>

  {/* Row 4 */}
  <div className="w-fit flex flex-nowrap gap-[20px] sm:gap-[50px] items-center   md:mt-[30px]">
    <span className="text-[30px] md:text-[100px] font-normal leading-[40px] sm:leading-[90px] flex items-center text-white uppercase fonk">
      VIRAL
    </span>
    <div className="w-[120px] sm:w-[250px] rounded-full overflow-hidden relative">
      <img
        src={image04}
        className="relative opacity-90 w-full h-[60px] sm:h-[120px] object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
      />
      <div className="artist z-0">0</div>
    </div>
  </div>
</div>


      {/* Call To Action */}

      <div className="w-full h-fit md:min-h-screen  flex flex-col justify-center items-center gap-[30px] md:gap-[60px]">
        <span className="text-white text-[20px] poppins-thin uppercase">
          Contact
        </span>
        <div className="text-[50px] md:text-[120px] uppercase text-center w-full text-transparent bg-clip-text font-medium p-2 hatch-background leading-none">
  <div className="flex flex-col items-center">
    <span className="fonk">Have a cool</span>
    <span>
      <span className="fonk">project</span>
      <span>?</span>
    </span>
  </div>
</div>

        <button className="buttonr px-16 py-5 text-2xl rounded-full poppins-light ">
          Let's Talk!
        </button>
      </div>
    </>
  );
};

export default About;
