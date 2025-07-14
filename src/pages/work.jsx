import React, { useState } from "react";
import video001 from "../assets/videos/icwLandscape.mp4";
import video002 from "../assets/videos/hendrcik01.mp4";
import video003 from "../assets/videos/monsho.mp4";
import video004 from "../assets/videos/IndiaBartenderWeek.mp4";
import video005 from "../assets/videos/MenBohmer.mp4";
import video006 from "../assets/videos/aperol.mp4";
import video007 from "../assets/videos/icwLandscape.mp4";
import video0007 from "../assets/videos/Glenddificih.mp4";
import video008 from "../assets/videos/pahadiTakeover1.mp4";
import video009 from "../assets/videos/grants.mp4";
import video010 from "../assets/videos/houseOfGlenfiddich.mp4";
import video011 from "../assets/videos/shortStorySpirits.mp4";
import video012 from "../assets/videos/barsCombined.mp4";
import video013 from "../assets/videos/smokey.mp4";
import video014 from "../assets/videos/negroniTalks.mp4";
import video015 from "../assets/videos/negroniTalks2.mp4";
import video016 from "../assets/videos/hendricksGinExplorerClub.mp4";
import video017 from "../assets/videos/vacoBinary.mp4";
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
import { Dialog } from "@headlessui/react";
import { set } from "date-fns";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);

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
        <div className="w-fit overflow-hidden justify-center flex h-fit">
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
        {/* ========================================================================= ITEM 1 VIDEO GRID 1 =========================================================================*/}
        <div className="w-[90%] md:w-3/4 h-fit-content flex flex-col items-center gap-[4px]">
          <div className="relative w-full rounded-[30px] md:rounded-[60px] overflow-hidden group">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-[30px] md:rounded-[60px] w-full h-full object-cover opacity-90 transition-transform duration-700 ease-in-out transform group-hover:scale-150">
              <source src={video004} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play button */}
            <button
              onClick={() => {
                setIsOpen(true);
                setActiveVideoUrl(
                  "https://www.youtube.com/embed/u6Cdd4lggUM?si=jJXiT7eLw93lbJmM"
                );
              }}
              className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black/60 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-10 h-10">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>

            {/* Popup Modal */}
          </div>
          <div className="w-full h-fit flex flex-col pt-4 pl-14 uppercase">
            <span className="text-[30px] text-white font-thin fonk">
              India Bartender Week
            </span>
          </div>
        </div>
        {/* ========================================================================= ITEM 2 VIDEO GRID 1 ========================================================================= */}
        <div className="w-[90%] md:w-3/4 h-fit-content flex flex-col items-center gap-[4px]">
          <div className="relative w-full rounded-[30px] md:rounded-[60px] overflow-hidden group">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-[30px] md:rounded-[60px] w-full h-full object-cover opacity-90 transition-transform duration-700 ease-in-out transform group-hover:scale-150">
              <source src={video005} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play button */}
            <button
              onClick={() => {
                setActiveVideoUrl(
                  "https://www.youtube.com/embed/Q5GEcahhgEI?si=sg0k7336GNgeH-3o"
                );
                setIsOpen(true);
              }}
              className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black/60 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-10 h-10">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>
          <div className="w-full h-fit flex flex-col pt-4 pl-14 uppercase">
            <span className="text-[30px] text-white font-thin fonk">
              Ben Bohmer India Tour
            </span>
          </div>
        </div>
        {/* ========================================================================= ITEM 3 VIDEO GRID 2 ========================================================================= */}
        <div className="w-[90%] md:w-3/4 h-fit flex md:flex-row flex-col items-center gap-[20px] ">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="relative w-full rounded-[30px] md:rounded-[60px] overflow-hidden group">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-[30px] md:rounded-[60px] w-full h-full object-cover opacity-90 transition-transform duration-700 ease-in-out transform group-hover:scale-150">
                <source src={video006} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play button */}
              <button
                onClick={() => {
                  setActiveVideoUrl(
                    "https://www.youtube.com/embed/jcerlyF-mo4?si=e8eEVtD4FnCfEMR3"
                  );
                  setIsOpen(true);
                }}
                className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/60 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-10 h-10">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>

              {/* Popup Modal */}
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                India Cocktail Week
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                Aperol Spritz
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="relative w-full rounded-[30px] md:rounded-[60px] overflow-hidden group aspect-video object-cover">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-[30px] md:rounded-[60px] w-full h-full object-cover opacity-90 transition-transform duration-700 ease-in-out transform group-hover:scale-150">
                <source src={video007} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play button */}
              <button
                onClick={() => {
                  setIsOpen(true);
                  setActiveVideoUrl(
                    "https://drive.google.com/file/d/1f7CxDekT-GzMdfGnyZmBvCpFZLZoz7ts/preview"
                  );
                }}
                className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/60 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-10 h-10">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>

              {/* Popup Modal */}
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                Indian Cocktail Week
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                Sky Vodka
              </span>
            </div>
          </div>
        </div>

        {/* ITEM video grid x2 */}
        {/* <div className="w-[90%] md:w-3/4 h-fit flex md:flex-row flex-col items-center gap-[20px] ">
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
                <source src={video013} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
             
              <span className="text-[30px] text-white font-thin uppercase fonk">
                smokey monkey
              </span>
            </div>
          </div>
        </div> */}
        {/* =========================================================================  ITEM 4 VIDEO GRID 2  =========================================================================*/}
        <div className="w-[90%] md:w-3/4 h-fit flex md:flex-row flex-col items-center gap-[20px] ">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="relative w-full rounded-[30px] md:rounded-[60px] overflow-hidden group  object-cover">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-[30px] md:rounded-[60px] w-full h-full object-cover opacity-90 transition-transform duration-700 ease-in-out transform group-hover:scale-150">
                <source src={video014} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play button */}
              <button
                onClick={() => {
                  setIsOpen(true);

                  setActiveVideoUrl(
                    "https://drive.google.com/file/d/1MDR2HTdJV64Obw8aVEAN2-fJMWOVRx7b/preview"
                  );
                }}
                className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/60 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-10 h-10">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>

              {/* Popup Modal */}
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[30px] text-white font-thin uppercase fonk">
                Campari Negroni Talks
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="relative w-full rounded-[30px] md:rounded-[60px] overflow-hidden group  object-cover">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-[30px] md:rounded-[60px] w-full h-full object-cover opacity-90 transition-transform duration-700 ease-in-out transform group-hover:scale-150">
                <source src={video015} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play button */}
              <button
                onClick={() => {
                  setIsOpen(true);
                  setActiveVideoUrl(
                    "https://drive.google.com/file/d/1Q1QiLuanMbOD068wu1wTx_5UiMpVbOiJ/preview"
                  );
                }}
                className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/60 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-10 h-10">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>

              {/* Popup Modal */}
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[30px] text-white font-thin uppercase fonk">
                Campari Negroni Talks
              </span>
            </div>
          </div>
        </div>
        {/* ========================================================================= ITEM 5 IMAGE GRID 3 ========================================================================= */}
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
                PHOTOSHOOT
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                Monkey Shoulder
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
                PHOTOSHOOT
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                Monkey Shoulder
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
                PHOTOSHOOT
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                Monkey Shoulder
              </span>
            </div>
          </div>
        </div>
        {/* Item  Image Grid 3 */}
        {/* <div className="w-[90%] md:w-3/4 h-fit flex md:flex-row flex-col items-center gap-[20px] ">
          <div className="w-full md:w-1/3 flex flex-col">
            <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square">
              <img
                src={image003}
                alt="image001"
                className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
              />
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              
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
            <div className="w-full h-fit flex flex-col pt-4 pl-10">
             <span className="text-[16px] text-white font-thin uppercase">
                Cocktail Shoot
              </span>
              <span className="text-[26px] text-white font-thin uppercase fonk">
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
              
              <span className="text-[30px] text-white font-thin uppercase fonk">
                ZERO02
              </span>
            </div>
          </div>
        </div> */}
        {/* Item  Image Grid 3 */}
        {/* <div className="w-[90%] md:w-3/4 h-fit flex md:flex-row flex-col items-center gap-[30px] ">
          <div className="w-full md:w-1/3 flex flex-col ">
            <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square">
              <img
                src={image006}
                alt="image001"
                className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
              />
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              
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
             
              <span className="text-[30px] text-white font-thin uppercase fonk">
                GRANTS TRIPLE{" "}
              </span>
            </div>
          </div>
        </div> */}

        {/* ========================================================================= ITEM 6 VIDEO GRID 2 =========================================================================*/}
        <div className="w-[90%] md:w-3/4 h-fit flex md:flex-row flex-col items-center gap-[20px] ">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="relative w-full rounded-[30px] md:rounded-[60px] overflow-hidden group  ">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-[30px] md:rounded-[60px] w-full h-full object-cover opacity-90 transition-transform duration-700 ease-in-out transform group-hover:scale-150">
                <source src={video013} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play button */}
              <button
                onClick={() => {
                  setIsOpen(true);
                  setActiveVideoUrl(
                    "https://drive.google.com/file/d/1UEerSD3NPdZyZznEQSAhnd3FgkdfH6Nl/preview"
                  );
                }}
                className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/60 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-10 h-10">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>

              {/* Popup Modal */}
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                LAuNCH PARTY
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                SMOKEY MONKEY
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="relative w-full rounded-[30px] md:rounded-[60px] overflow-hidden group  ">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-[30px] md:rounded-[60px] w-full h-full object-cover opacity-90 transition-transform duration-700 ease-in-out transform group-hover:scale-150">
                <source src={video002} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play button */}
              <button
                onClick={() => {
                  setIsOpen(true);
                  setActiveVideoUrl(
                    "https://drive.google.com/file/d/1chvcKYeXW_8cuxjQ2gN_Wuvj8XR3HStS/preview"
                  );
                }}
                className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/60 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-10 h-10">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>

              {/* Popup Modal */}
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                CABINETS OF CURIOSITIES
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                hendricks
              </span>
            </div>
          </div>
        </div>
        {/* ========================================================================= ITEM 7 VIDEO GRID 3 ========================================================================= */}
        <div className="w-[90%] md:w-3/4 h-fit flex md:flex-row flex-col items-center gap-[20px] ">
          <div className="w-full md:w-1/3 flex flex-col">
            <div className="relative w-full rounded-[30px] md:rounded-[60px] overflow-hidden group  ">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-[30px] md:rounded-[60px] w-full h-full object-cover opacity-90 transition-transform duration-700 ease-in-out transform group-hover:scale-150">
                <source src={video008} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play button */}
              <button
                onClick={() => {
                  setIsOpen(true);
                  setActiveVideoUrl(
                    "https://www.youtube.com/embed/R7mwvbgNK0M?si=VowCmHwbXFQ6loWo"
                  );
                }}
                className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/60 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-10 h-10">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>

              {/* Popup Modal */}
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[30px] text-white font-thin uppercase fonk">
                PAHADI TAKEOVER
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col">
            <div className="relative w-full rounded-[30px] md:rounded-[60px] overflow-hidden group  ">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-[30px] md:rounded-[60px] w-full h-full object-cover opacity-90 transition-transform duration-700 ease-in-out transform group-hover:scale-150">
                <source src={video009} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play button */}
              <button
                onClick={() => {
                  setIsOpen(true);
                  setActiveVideoUrl(
                    "https://www.youtube.com/embed/RPgKoynw4FE?si=VowCmHwbXFQ6loWo"
                  );
                }}
                className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/60 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-10 h-10">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>

              {/* Popup Modal */}
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[30px] text-white font-thin uppercase fonk">
                GRANTS FRIENDSHIP DAY
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col">
            <div className="relative w-full rounded-[30px] md:rounded-[60px] overflow-hidden group  ">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-[30px] md:rounded-[60px] w-full h-full object-cover opacity-90 transition-transform duration-700 ease-in-out transform group-hover:scale-150">
                <source src={video010} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play button */}
              <button
                onClick={() => {
                  setIsOpen(true);
                  setActiveVideoUrl(
                    "https://www.youtube.com/embed/hIZnUnAzcxQ?si=VowCmHwbXFQ6loWo"
                  );
                }}
                className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/60 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-10 h-10">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>

              {/* Popup Modal */}
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[30px] text-white font-thin uppercase fonk">
                House of Glenfiddich
              </span>
            </div>
          </div>
        </div>
        {/* ========================================================================= ITEM 8 VIDEO GRID 3 ========================================================================= */}
        <div className="w-[90%] md:w-3/4 h-fit flex md:flex-row flex-col items-center gap-[20px] ">
          <div className="w-full md:w-1/3 flex flex-col">
            <div className="relative w-full rounded-[30px] md:rounded-[60px] overflow-hidden group  ">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-[30px] md:rounded-[60px] w-full h-full object-cover opacity-90 transition-transform duration-700 ease-in-out transform group-hover:scale-150">
                <source src={video011} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play button */}
              <button
                onClick={() => {
                  setIsOpen(true);
                  setActiveVideoUrl(
                    "https://www.youtube.com/embed/xcOhp7SVBAo?si=VowCmHwbXFQ6loWo"
                  );
                }}
                className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/60 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-10 h-10">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>

              {/* Popup Modal */}
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[30px] text-white font-thin uppercase fonk">
                Short Story Delhi Launch
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col">
            <div className="relative w-full rounded-[30px] md:rounded-[60px] overflow-hidden group  ">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-[30px] md:rounded-[60px] w-full h-full object-cover opacity-90 transition-transform duration-700 ease-in-out transform group-hover:scale-150">
                <source src={video0007} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play button */}
              <button
                onClick={() => {
                  setIsOpen(true);
                  setActiveVideoUrl(
                    "https://www.youtube.com/embed/wH9gtOAWPIk?si=VowCmHwbXFQ6loWo"
                  );
                }}
                className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/60 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-10 h-10">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>

              {/* Popup Modal */}
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[30px] text-white font-thin uppercase fonk">
                Glenfiddich World Whiskey Day
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col">
            <div className="relative w-full rounded-[30px] md:rounded-[60px] overflow-hidden group  ">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-[30px] md:rounded-[60px] w-full h-full object-cover opacity-90 transition-transform duration-700 ease-in-out transform group-hover:scale-150">
                <source src={video012} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play button */}
              <button
                onClick={() => {
                  setIsOpen(true);
                  setActiveVideoUrl(
                    "https://www.youtube.com/embed/HK6I_MH9Y1Q?si=VowCmHwbXFQ6loWo"
                  );
                }}
                className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/60 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-10 h-10">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>

              {/* Popup Modal */}
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[30px] text-white font-thin uppercase fonk">
                India Bartender Week
              </span>
            </div>
          </div>
        </div>
        {/* ========================================================================= ITEM 9 VIDEO GRID 2 =========================================================================*/}
        <div className="w-[90%] md:w-3/4 h-fit flex md:flex-row flex-col items-center gap-[20px] ">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="relative w-full rounded-[30px] md:rounded-[60px] overflow-hidden group  ">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-[30px] md:rounded-[60px] w-full h-full object-cover opacity-90 transition-transform duration-700 ease-in-out transform group-hover:scale-150">
                <source src={video016} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play button */}
              <button
                onClick={() => {
                  setIsOpen(true);
                  setActiveVideoUrl(
                    "https://www.youtube.com/embed/7Dn0BAiXvKc?si=DeEpWtxIkz-lSefM"
                  );
                }}
                className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/60 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-10 h-10">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>

              {/* Popup Modal */}
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                Explorers Club
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                Hendricks
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="relative w-full rounded-[30px] md:rounded-[60px] overflow-hidden group  ">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-[30px] md:rounded-[60px] w-full h-full object-cover opacity-90 transition-transform duration-700 ease-in-out transform group-hover:scale-150">
                <source src={video017} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play button */}
              <button
                onClick={() => {
                  setIsOpen(true);
                  setActiveVideoUrl(
                    "https://www.youtube.com/embed/a8_fTBq-cTE?si=yRMf4KX-rdgTh1lk"
                  );
                }}
                className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/60 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-10 h-10">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>

              {/* Popup Modal */}
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              <span className="text-[16px] text-white font-thin uppercase">
                New Office Launch
              </span>
              <span className="text-[30px] text-white font-thin uppercase fonk">
                Vaco Binary Semantics
              </span>
            </div>
          </div>
        </div>

        {/* Item 8 Image Grid 3 */}

        {/* Item 4 image grid 2*/}

        {/* <div className="w-[90%] md:w-3/4 h-fit flex md:flex-row flex-col items-center gap-[40px] ">
          <div className="w-full md:w-1/2 flex flex-col ">
            <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square">
              <img
                src={image8}
                alt="image001"
                className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
              />
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
             
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
             
              <span className="text-[30px] text-white font-thin uppercase fonk">
                grants triple wood
              </span>
            </div>
          </div>
        </div> */}

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

        {/* Item 8 image grid 2*/}

        {/* <div className="w-[90%] md:w-3/4 h-fit md:flex-row flex-col flex items-center gap-[40px] ">
          <div className="w-full md:w-1/2 flex flex-col  ">
            <div className="rounded-[30px] md:rounded-[60px] relative w-full h-fit flex flex-col items-center gap-[4px] overflow-hidden aspect-square">
              <img
                src={image009}
                alt="image001"
                className="rounded-[30px] md:rounded-[60px]  relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
              />
            </div>
            <div className="w-full h-fit flex flex-col pt-4 pl-14">
              
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
             
              <span className="text-[30px] text-white font-thin uppercase fonk">
                zero02
              </span>
            </div>
          </div>
        </div> */}

        {/* item 9 grid x2 */}
        {/* <div className="w-[90%] md:w-3/4 h-fit flex md:flex-row flex-col items-center gap-[20px] ">
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
             
              <span className="text-[30px] text-white font-thin uppercase fonk">
                smokey monkey
              </span>
            </div>
          </div>
        </div> */}
        {/* ========================================================================= ITEM 10 IMAGE GRID 3 =========================================================================  */}
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
              <span className="text-[30px] text-white font-thin uppercase fonk">
                Monkey Shoulder
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
              <span className="text-[30px] text-white font-thin uppercase fonk">
                Bablouie AND Co
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
              <span className="text-[30px] text-white font-thin uppercase fonk">
                Pistola Agavepura
              </span>
            </div>
          </div>
        </div>
        <button
          className=" block buttonb self-center mt-20 w-[80%] md:px-20   h-[150px] text-[14px] md:text-[30px] leading-normal opacity-80 uppercase font-light text-white border border-white"
          onClick={() =>
            window.open("https://www.instagram.com/anevmedia", "_blank")
          }>
          <span className="fonk">CLICK HERE TO SEE MORE OF OUR WORK</span>
        </button>
      </div>

      {/* Call To Action */}

      <div className="bgblink mt-[50px]  md:mt-0 md:pt-[150px] w-[full] h-fit md:min-h-fit  flex flex-col justify-center items-center gap-[30px] md:gap-[60px]">
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

        <button
          onClick={() => {
            navigate("/contact-us");
          }}
          className="buttonr px-16 py-5 text-2xl rounded-full poppins-light ">
          Let's Talk!
        </button>
      </div>

      {/* <div className="w-full min-h-screen bg-black flex flex-col justify-center items-center gap-[4px]">

            </div> */}
      <Dialog
        open={isOpen}
        onClose={() => {
          setActiveVideoUrl(null);
          setIsOpen(false);
        }}
        className="fixed z-50 inset-0 flex items-center justify-center bg-black/70 px-4">
        <div className="relative bg-white rounded-2xl w-full max-w-[500px] md:max-w-[1280px] aspect-video shadow-lg">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-white bg-black p-2 rounded-full z-50">
            ✕
          </button>
          {activeVideoUrl && (
            <div className="w-full h-full">
              <iframe
                src={activeVideoUrl}
                title="YouTube video player"
                className="w-full h-full rounded-b-2xl"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
            </div>
          )}
        </div>
      </Dialog>
    </>
  );
};

export default Work;
