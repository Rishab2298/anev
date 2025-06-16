import React from "react";
import video001 from "../assets/videos/icwLandscape.mp4";
import video002 from "../assets/videos/hendrcik01.mp4";
import video003 from "../assets/videos/monsho.mp4";
import video004 from "../assets/videos/smokey.mp4";
import image001 from "../assets/images/as1.png";
import image002 from "../assets/images/gtw1.png";
import image003 from "../assets/images/mc1.jpg";
import image004 from "../assets/images/ms01.png";
import image005 from "../assets/images/zero22.png";
import image006 from "../assets/images/mc2.jpg";
import image007 from "../assets/images/as7.png";
import image008 from "../assets/images/gtw3.png";
import image009 from "../assets/images/gtw4.png";
import image010 from "../assets/images/zero210.png";
import video17 from "../assets/videos/video17.mp4";
import video18 from "../assets/videos/video18.mp4";

import image1 from "../assets/images/1.png";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";
import image5 from "../assets/images/5.png";
import image6 from "../assets/images/6.png";
import image7 from "../assets/images/7.png";
import image8 from "../assets/images/8.png";



import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
const navigate = useNavigate();
  useEffect(() => {
    const elements = [text1Ref.current, text2Ref.current];

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 100, opacity: 0 }, // Start 100px below & invisible
        {
          y: 0, // Move to normal position
          opacity: 1, // Fade in
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%", // Triggers when element is 85% in viewport
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);
  return (
    <>
      {/* Hero Text */}
      <div className="bgblink w-full  min-h-[450px] md:min-h-fit md:py-16 bg-black flex flex-col justify-center items-center gap-[10px] ">
        {/* Title - "Explore Our" */}
        <div className="w-fit overflow-hidden h-fit">
          <span
            ref={text1Ref}
            className="fonk text-[40px] md:text-[150px] uppercase text-center w-full text-transparent bg-clip-text font-medium  p-2  hatch-background">
            Explore Our
          </span>
        </div>

        {/* Description */}
        <span className="text-white text-[16px] md:text-[20px] w-[90%] md:w-1/2 poppins-thin text-center">
          A showcase of our best concept work, highlighting our approach to a
          unique visual language, and our skillset in understanding effective
          media production.
        </span>

        {/* Title - "Playground" */}
        <div className="w-fit overflow-hidden h-fit">
          <span
            ref={text2Ref}
            className="fonk text-[40px] md:text-[150px] uppercase text-center w-full text-transparent bg-clip-text font-medium  p-2  hatch-background">
            Playground
          </span>
        </div>
      </div>
      {/* work with 1 item */}
      <div className="bgblink w-full flex flex-col items-center gap-[50px] md:gap-[200px] justify-center">
        {/* item 1 grid x2 */}
        <div className="w-[90%] md:w-3/4 h-fit flex md:flex-row flex-col items-center gap-[20px] ">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10">
                <source src={video001} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                brand films
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                sky vodka bangalore
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10">
                <source src={video004} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                brand films
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
               smokey monkey
              </span>
            </div>
          </div>
        </div>
        {/* Item 2 Image Grid 3 */}
        <div className="w-[90%] md:w-3/4 h-fit flex md:flex-row flex-col items-center gap-[20px] ">
          <div className="w-full md:w-1/3 flex flex-col">
            <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square">
              <img
                src={image003}
                alt="image001"
                className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
              />
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                photoshoot
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                CAMPARI
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col">
            <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square">
              <img
                src={image004}
                alt="image001"
                className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
              />
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                photoshoot
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                MONKEY SHOULDER
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col">
            <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square">
              <img
                src={image005}
                alt="image001"
                className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
              />
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                photoshoot
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                ZERO02
              </span>
            </div>
          </div>
        </div>

        {/* Item 3 grid 2*/}
        <div className="w-[90%] md:w-3/4 h-fit flex md:flex-row flex-col items-center gap-[20px] ">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10">
                <source src={video004} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                brand films
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
             SMOKEY MONKEY
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10">
                <source src={video002} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                   launch film
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                hendricks grappa
              </span>
            </div>
          </div>
        </div>
        {/* Item 2 Image Grid 3 */}
        <div className="w-[90%] md:w-3/4 h-fit flex md:flex-row flex-col items-center gap-[20px] ">
          <div className="w-full md:w-1/3 flex flex-col">
            <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square">
              <img
                src={image1}
                alt="image001"
                className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
              />
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                photoshoot
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                CAMPARI
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col">
            <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square">
              <img
                src={image2}
                alt="image001"
                className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
              />
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                photoshoot
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                MONKEY SHOULDER
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col">
            <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square">
              <img
                src={image3}
                alt="image001"
                className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
              />
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                photoshoot
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                ZERO02
              </span>
            </div>
          </div>
        </div>

        {/* Item 4 image grid 2*/}

        <div className="w-[90%] md:w-3/4 h-fit flex md:flex-row flex-col items-center gap-[40px] ">
          <div className="w-full md:w-1/2 flex flex-col ">
            <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square">
              <img
                src={image8}
                alt="image001"
                className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
              />
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                photoshoot
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                APEROL SUNDOWNER
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col ">
            <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square">
              <img
                src={image002}
                alt="image001"
                className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
              />
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                photoshoot
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                grants triple wood
              </span>
            </div>
          </div>
        </div>

        {/* Item 6 Video Grid 1 */}
        {/* <div className="w-[90%] md:w-3/4 h-fit-content flex flex-col items-center gap-[4px]">
          <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10">
              <source src={video004} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-full h-fit flex flex-col pt-4 pl-14 uppercase">
            <span className="text-[16px] text-white font-thin">brand film</span>
            <span className="text-[30px] text-white font-thin fonk">
              smokey monkey
            </span>
          </div>
        </div> */}
        {/* Item 7 Image Grid 3 */}
        <div className="w-[90%] md:w-3/4 h-fit flex md:flex-row flex-col items-center gap-[30px] ">
          <div className="w-full md:w-1/3 flex flex-col ">
            <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square">
              <img
                src={image006}
                alt="image001"
                className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
              />
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                photoshoot
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                CAMPARI
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col">
            <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square">
              <img
                src={image007}
                alt="image001"
                className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
              />
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                photoshoot
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                aperol sundowner
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col">
            <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square">
              <img
                src={image008}
                alt="image001"
                className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
              />
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                photoshoot
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                GRANTS TRIPLE{" "}
              </span>
            </div>
          </div>
        </div>

        {/* Item 8 image grid 2*/}

        <div className="w-[90%] md:w-3/4 h-fit md:flex-row flex-col flex items-center gap-[40px] ">
          <div className="w-full md:w-1/2 flex flex-col  ">
            <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square">
              <img
                src={image009}
                alt="image001"
                className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
              />
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                photoshoot
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                GRANTS TRIPLE WOOD
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col ">
            <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square">
              <img
                src={image010}
                alt="image001"
                className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
              />
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                photoshoot
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                zero02
              </span>
            </div>
          </div>
        </div>
         {/* Item 2 Image Grid 3 */}
        <div className="w-[90%] md:w-3/4 h-fit flex md:flex-row flex-col items-center gap-[20px] ">
          <div className="w-full md:w-1/3 flex flex-col">
            <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square">
              <img
                src={image4}
                alt="image001"
                className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
              />
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                photoshoot
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                CAMPARI
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col">
            <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square">
              <img
                src={image5}
                alt="image001"
                className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
              />
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                photoshoot
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                MONKEY SHOULDER
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col">
            <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square">
              <img
                src={image6}
                alt="image001"
                className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
              />
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                photoshoot
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                ZERO02
              </span>
            </div>
          </div>
        </div>
          {/* item 9 grid x2 */}
        <div className="w-[90%] md:w-3/4 h-fit flex md:flex-row flex-col items-center gap-[20px] ">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10">
                <source src={video17} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                brand films
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                sky vodka bangalore
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10">
                <source src={video18} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                brand films
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
               smokey monkey
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Call To Action */}

      <div className="bgblink mt-[50px]  md:mt-0 md:pt-[150px] w-full h-fit md:min-h-fit  flex flex-col justify-center items-center gap-[30px] md:gap-[60px]">
        {/* <span className="text-white text-[20px] poppins-thin uppercase">
          Contact
        </span> */}
        <div className="text-[50px] md:text-[120px] uppercase text-center w-full text-transparent bg-clip-text font-medium p-2 hatch-background leading-none">
          <div className="flex flex-col items-center">
            <span className="fonk">Have a cool</span>
            <span>
              <span className="fonk">project</span>
              <span>?</span>
            </span>
          </div>
        </div>

        <button onClick={()=>{navigate("/contact-us")}} className="buttonr px-16 py-5 text-2xl rounded-full poppins-light ">
          Let's Talk!
        </button>
      </div>

      {/* <div className="w-full min-h-screen bg-black flex flex-col justify-center items-center gap-[4px]">

            </div> */}
    </>
  );
};

export default Work;
