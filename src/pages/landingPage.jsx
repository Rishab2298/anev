import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Splide core & React components
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Splide default CSS
import "@splidejs/react-splide/css";

// Splide Auto Scroll extension
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import bgImage from "../assets/images/bgGradient.png";
import heroImage from "../assets/videos/showReel.mp4";
import starsBg from "../assets/starsBg.jpg";
import service1 from "../assets/1ajan.avif";
import service2 from "../assets/2ajan.avif";
import service3 from "../assets/3ajan.avif";
import service4 from "../assets/4ajan.avif";
import service5 from "../assets/5ajan.avif";
import webDev from "../assets/1.jpg";
import socialMedia from "../assets/2.jpg";
import production from "../assets/3.jpg";
import contentCreation from "../assets/4.jpg";
import service6 from "../assets/6ajan.avif";
import billboard from "../assets/billboard.png";
import herImage from "../assets/anevHeroImage.webp";
import InfiniteCarousel from "../components/infiniteCarousle";

import logo1 from "../assets/logos/logo1.jpeg";
import logo2 from "../assets/logos/logo2.png";
import logo3 from "../assets/logos/logo3.png";
import logo4 from "../assets/logos/logo4.png";
import logo5 from "../assets/logos/logo5.jpeg";
import logo6 from "../assets/logos/logo6.png";
import logo7 from "../assets/logos/logo7.png";
import logo8 from "../assets/logos/logo8.png";
import logo9 from "../assets/logos/logo9.webp";
import logo10 from "../assets/logos/logo10.png";
import logo11 from "../assets/logos/logo11.png";
import logo12 from "../assets/logos/logo12.jpeg";
import logo13 from "../assets/logos/logo13.png";
import logo14 from "../assets/logos/logo14.jpeg";
import logo15 from "../assets/logos/logo15.jpeg";
import logo16 from "../assets/logos/logo16.png";
import logo17 from "../assets/logos/logo17.png";
import logo18 from "../assets/logos/logo18.png";
import logo19 from "../assets/logos/logo19.webp";
import logo20 from "../assets/logos/logo20.webp";
import logo21 from "../assets/logos/logo21.jpg";
import logo22 from "../assets/logos/logo22.svg";
import logo23 from "../assets/logos/logo23.webp";
import logo24 from "../assets/logos/logo24.webp";
import logo25 from "../assets/logos/logo25.png";
import logo26 from "../assets/logos/logo26.jpg";
const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  
];
const logoss = [
logo11,

  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
  logo17,
  logo18,
  logo19,
  logo20,
 
];
const logosss=[
  logo21,
  logo22,
  logo23,
  logo24,
  logo25,
  logo26,
  logo12,
  logo4,
  logo5,
  logo20
]


const logos1=[
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
];
const logos2=[
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
  logo17,
  logo18,
];
const logos3=[
  logo19,
  logo20,
  logo21,
  logo22,
  logo23,
  logo24,
  logo25,
  logo26,
  logo1,
  

]


import asset1 from "../assets/asset1.png";
import AnimatedList from "../components/animatedList";
import InfiniteCarouselRight from "../components/infiniteCarousleRight";

import icon from "../assets/icon.svg";
import Section from "./section";
import ScrollingAnimation from "./section";
import InfiniteLandscapeRight from "../components/infiniteCarousleLandscapeVideoRight";


gsap.registerPlugin(ScrollTrigger);
const LandingPage = ({ direction = "left", speed = 1.5 }) => {
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);

  const processItems = [
    {
      title: "Briefing",
      text: "Your brand's vision is our launchpad. We meticulously understand your goals, values, and target audience to kickstart the journey.",
    },
    {
      title: "Ideation",
      text: "Our creative minds spin concepts that align with your brand’s essence, ensuring every idea is groundbreaking and strategic.",
    },
    {
      title: "Execution",
      text: "From design to development, every step is marked by precision. Your project moves swiftly through each stage without compromising quality.",
    },
    {
      title: "Delivery And Beyond",
      text: "This partnership doesn't end at delivery. We analyze outcomes, gather insights, and iterate strategies for continuous growth.",
    },
  ];
  const services = [
    { img: production, title: "Event Content Production" },
    { img: contentCreation, title: "Content Creation" },
    { img: socialMedia, title: "Social Media Management" },
    { img: webDev, title: "Website Development" },
  ];
  useEffect(() => {
    const elements = elementsRef.current;

    gsap.fromTo(
      elements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3, // Delay between animations
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // Animation starts when top of section is 75% into view
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  // const carouselData = [
  //   {
  //     type: "image",
  //     url: service1,
  //     link: "https://example.com",
  //   },
  //   {
  //     type: "video",
  //     url: "https://www.w3schools.com/html/mov_bbb.mp4",
  //     link: "https://example.com/video",
  //   },
  //   {
  //     type: "image",
  //     url: "https://via.placeholder.com/800x400",
  //     link: "https://example.com/image2",
  //   },
  // ];
  const containerRef = useRef(null);
  const textRef = useRef([]);

  useEffect(() => {
    const words = textRef.current;

    gsap.fromTo(
      words,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1, // smoothness: 1 second
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "top 10%",
          // scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      {/* Hero Image  */}
      <div className="bgblink w-full  h-fit  bg-black flex justify-center items-center">
        {/* <img
          src={herImage}
          alt="herImage"
          className="w-full md:w-4/5 py-2 h-auto"
        /> */}
        <video
          autoPlay

          muted
          playsInline
          className="w-full h-fit hero-banner ">
          <source src={heroImage} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* <ScrollingAnimation /> */}
       {/* Our Work */}
       <div className="bgblink w-full h-fit flex flex-col justify-center items-center bg-black p-5 md:px-20 gap-4 md:gap-10">
        <h2 className="fonk text-[30px] text-center md:text-left md:text-[65px]  w-full text-transparent bg-clip-text font-medium  p-2  hatch-background">
          OUR WORK
        </h2>

        {/* Carousel 1 */}
        <div className="w-full flex flex-col items-center gap-10">
          <InfiniteLandscapeRight />
          <InfiniteCarousel />
          <InfiniteCarouselRight />{" "}
          {/* 
          <div className="hidden md:flex">
            <InfiniteCarousel />  </div> */}
          {/* <AnimatedList /> */}
        </div>
      </div>
        {/* Services */}
        <div className="bgblink w-full h-fit flex flex-col justify-center items-center bg-black md:p-20 p-5 gap-4 md:gap-10">
        <h2 className="text-[30px] md:text-[65px] md:text-left text-center  w-full text-transparent bg-clip-text font-bold  p-2  hatch-background fonk">
          SERVICES
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            el: ".my-custom-pagination",
            clickable: true,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="w-full">
          {services.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col gap-4 px-4">
                <div className="  w-full aspect-square rounded-4xl overflow-hidden relative">
                  <img
                    src={item.img}
                    className=" relative opacity-90 w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-150 z-10"
                  />
                  <div className="artist z-0">0</div>
                </div>
                <span className="fonk uppercase font-thin text-[20px] text-center text-white">
                  {item.title}
                </span>
              </div>
            </SwiperSlide>
          ))}
          <div className="my-custom-pagination  text-center" />
        </Swiper>
      </div>
      {/* What is Anev */}
      <div className="bgblink w-full h-fit relative ">
        {/* Image */}
        

        {/* Text Overlay */}
        <div className=" w-full h-full flex flex-col justify-center items-center pb-[200px] py-10 ">
          <h2 className=" text-[30px] md:text-[65px]  w-full text-transparent bg-clip-text font-bold  p-2 text-center hatch-background">
            <span className="fonk">WHAT IS ANEV</span>?
          </h2>
          <span className="w-full md:w-1/2 text-white text-center md:text-[24px] text-[15px] p-4 leading-[25px] md:leading-[36px] font-thin tracking-wide">
            ANEV is a next-generation creative agency built to move brands
            forward — fast. We combine sharp strategy, bold storytelling, and
            agile execution to craft impactful content ecosystems that don’t
            just catch attention, but hold it. <br /><br />With ANEV, your brand doesn’t
            just exist online — it leads, resonates, and thrives.
          </span>
        </div>
      </div>

      {/* NEXT GEN media pipeline */}
      <div
        ref={containerRef}
        className="bgblink relative w-full h-fit md:h-screen flex flex-col justify-center items-center">
        <img
          id="banner"
          src={bgImage}
          alt="bgImage"
          className="w-full h-auto"
        />
        <div className="absolute flex flex-col justify-center items-center md:gap-5 gap-1.5">
          <span className=" text-white uppercase  text-[15px] md:text-[60px] md:leading-[70px] text-center">
            {"The next generation media pipeline "
              .split(" ")
              .map((word, index) => (<>
                <span
                  key={index}
                  ref={(el) => (textRef.current[index] = el)}
                  className="fonk inline-block overflow-hidden">
                  {word}
                </span>
                <span className=" md:px-1">&nbsp;</span>
                </>
              ))}
          </span>
          <button className="buttonra p-1 md:p-3 rounded-full poppins-light w-[30px] md:w-[65px] overflow-auto bg-black">
            <img src={icon} className="transition-transform duration-300 hover:scale-110" alt="Button Asset" />
          </button>
        </div>
      </div>
      
    
     

      {/* Clientele */}
      <div className="bgblink  w-full h-fit flex flex-col justify-center items-center bg-black md:px-20 md:py-10 p-4 gap-2 md:gap-10 mt-4 md:mt-0">
        <h2 className="fonk text-[30px] md:text-left text-center md:text-[75px]  w-full text-transparent bg-clip-text font-medium  p-2  hatch-background">
          CLIENTELE
        </h2>

        <div className="flex flex-col md:hidden w-full overflow-hidden mt-0 mb-5 bg-white rounded-lg mx-3 px-3">
          <Splide
            options={{
              type: "loop",
              drag: "free",
              arrows: false,
              pagination: false,
              perPage: 4,
              gap: "3rem",
              autoScroll: {
                speed: direction === "left" ? -speed : speed,
                pauseOnHover: false,
                pauseOnFocus: false,
                rewind: false,
              },
            }}
            extensions={{ AutoScroll }}>
            {logos1.map((logo, index) => (
              <SplideSlide key={index}>
                <div className="flex justify-center items-center h-24">
                  <img
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className="h-full object-contain"
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
          <Splide
            options={{
              type: "loop",
              drag: "free",
              arrows: false,
              pagination: false,
              perPage: 4,
              gap: "3rem",
              autoScroll: {
                direction: "right",
                speed: 2,
                pauseOnHover: false,
                pauseOnFocus: false,
                rewind: false,
              },
            }}
            extensions={{ AutoScroll }}>
            {logos2.map((logo, index) => (
              <SplideSlide key={index}>
                <div className="flex justify-center items-center h-24">
                  <img
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className="h-full object-contain"
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
          <Splide
            options={{
              type: "loop",
              drag: "free",
              arrows: false,
              pagination: false,
              perPage: 4,
              gap: "3rem",
              autoScroll: {
                speed: direction === "left" ? -speed : speed,
                pauseOnHover: false,
                pauseOnFocus: false,
                rewind: false,
              },
            }}
            extensions={{ AutoScroll }}>
            {logos3.map((logo, index) => (
              <SplideSlide key={index}>
                <div className="flex justify-center items-center h-24">
                  <img
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className="h-full object-contain"
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>

        <div
          className="hidden w-full md:flex flex-row items-center  justify-center bg-contain bg-top"
          style={{
            backgroundImage: `url(${billboard})`,
            backgroundRepeat: "no-repeat",
          }}>
          <div className="w-2/5 h-[600px] flex-row mt-[100px]">
            {" "}
            {/* Set a fixed height here */}
            <Swiper
              direction="vertical"
              // pagination={{ clickable: true }}
              // modules={[Pagination]}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              spaceBetween={10}
              slidesPerView={1} // Show 3 slides at a time
              modules={[Autoplay]}
              className="h-[300px]" // Ensure full height is used
            >
              <SwiperSlide key="1">
                <div className="flex justify-center items-center h-[250px] ">
                  <div className="grid grid-cols-5 grid-rows-2 gap-1 w-full  h-full">
                    {logos.slice(0, 10).map((logo, index) => (
                      <div
                        key={index}
                        className="flex justify-center items-center">
                        <img
                          src={logo}
                          alt={`Logo ${index + 1}`}
                          className="w-2/3  object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key="2">
                <div className="flex justify-center items-center h-[250px] ">
                  <div className="grid grid-cols-5 grid-rows-2 gap-1 w-full  h-full">
                    {logoss.slice(0, 10).map((logo, index) => (
                      <div
                        key={index}
                        className="flex justify-center items-center">
                        <img
                          src={logo}
                          alt={`Logo ${index + 1}`}
                          className="w-2/3  object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key="3">
                <div className="flex justify-center items-center h-[250px] ">
                  <div className="grid grid-cols-5 grid-rows-2 gap-1 w-full  h-full">
                    {logosss.slice(0, 10).map((logo, index) => (
                      <div
                        key={index}
                        className="flex justify-center items-center">
                        <img
                          src={logo}
                          alt={`Logo ${index + 1}`}
                          className="w-2/3  object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* Pipeline */}
      {/* -----------for desktop----------- */}
      <div
        ref={sectionRef}
        className="bgblink hidden w-full h-fit md:flex flex-col justify-center items-center bg-black p-20 gap-10">
        <h2 className="fonk text-[65px] w-full text-transparent bg-clip-text font-medium p-2 hatch-background">
          OUR PROCESS
        </h2>
        <div className="w-full flex justify-center items-center gap-12">
          {[
            {
              title: " Briefing",
              text: "Your brand's vision is our launchpad. We meticulously understand your goals, values, and target audience to kickstart the journey.",
            },
            {
              title: " Ideation",
              text: "Our creative minds spin concepts that align with your brand’s essence, ensuring every idea is groundbreaking and strategic.",
            },
            {
              title: " Execution",
              text: "From design to development, every step is marked by precision. Your project moves swiftly through each stage without compromising quality.",
            },
            {
              title: " Delivery and Beyond",
              text: "This partnership doesn't end at delivery. We analyze outcomes, gather insights, and iterate strategies for continuous growth.",
            },
          ].map((item, index) => (
            <div
              key={index}
              ref={(el) => (elementsRef.current[index] = el)}
              className="w-1/4 flex flex-col gap-4 opacity-0">
              <img
                className="w-10 h-10 object-contain rounded-full p-2 bg-neutral-800"
                src={icon}
                alt="icon"
              />
              <span className="uppercase fonk text-[30px] text-white">
                {item.title}
              </span>
              <span className="text-white font-thin">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      {/* -----------for mobile----------- */}
      <div className="w-full h-fit flex flex-col justify-center items-center bg-black p-5 gap-10 md:hidden">
        <h2 className="fonk text-[40px] md:text-[75px] text-center w-full text-transparent bg-clip-text font-medium p-2 hatch-background">
          OUR PROCESS
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            el: ".process-pagination",
            clickable: true,
          }}
          modules={[Pagination]}
          className="w-full">
          {processItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center gap-4 px-4">
                <img
                  className="w-10 h-10 object-contain rounded-full p-2 bg-neutral-800"
                  src={icon}
                  alt="icon"
                />
                <span className="uppercase fonk text-[24px] text-white">
                  {item.title}
                </span>
                <span className="text-white font-thin">{item.text}</span>
              </div>
            </SwiperSlide>
          ))}
          <div className="process-pagination text-center mt-4" />
        </Swiper>
      </div>

      {/* Call To Action */}

      <div className="bgblink relative w-full h-fit flex flex-col justify-center items-center ">
        <img
          id="banner"
          src={bgImage}
          alt="bgImage"
          className="w-full h-auto"
        />
        <div className="absolute flex flex-col justify-center items-center gap-0 md:gap-5">
          <span className="uppercase  text-[25px] md:text-[60px] leading-none text-center w-full  text-white font-medium  p-2  ">
            {" "}
           <span className="fonk" >Let</span><span>'</span><span className="fonk">s Create Digital <br />Magic Together</span>
          </span>
          <button className="fonk  uppercase buttonr px-6 py-2 md:px-16 md:py-5 md:text-2xl rounded-full md:w-[400px] w-[250px] ">
            Get in Touch
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
