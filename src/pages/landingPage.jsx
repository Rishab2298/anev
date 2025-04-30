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
import bgImage from "../assets/gradient.png";
import heroImage from "../assets/heroImage.webm";
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
const logoso = [
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
import logo11 from "../assets/logo11.png";
import logo12 from "../assets/logo12.png";
import logo13 from "../assets/logo13.png";
import logo14 from "../assets/logo14.png";
import logo15 from "../assets/logo15.webp";
import logo16 from "../assets/logo16.jpeg";
import logo17 from "../assets/logo17.png";
import logo18 from "../assets/logo18.webp";
import logo19 from "../assets/logo19.png";
import logo20 from "../assets/logo20.png";

import asset1 from "../assets/asset1.png";
import AnimatedList from "../components/animatedList";
import InfiniteCarouselRight from "../components/infiniteCarousleRight";

import icon from "../assets/icon.svg";
import Section from "./section";
import ScrollingAnimation from "./section";
import InfiniteLandscapeRight from "../components/infiniteCarousleLandscapeVideoRight";
const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo16,
  logo20,
  logo18,
  logo9,
  logo10,
];
const logos2 = [
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  logo6,
  logo17,
  logo8,
  logo19,
  logo7,
];
gsap.registerPlugin(ScrollTrigger);
const LandingPage = ({ direction = "left", speed = 1.5 }) => {
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);

  const processItems = [
    {
      title: "1. Briefing",
      text: "Your brand's vision is our launchpad. We meticulously understand your goals, values, and target audience to kickstart the journey.",
    },
    {
      title: "2. Ideation",
      text: "Our creative minds spin concepts that align with your brand’s essence, ensuring every idea is groundbreaking and strategic.",
    },
    {
      title: "3. Execution",
      text: "From design to development, every step is marked by precision. Your project moves swiftly through each stage without compromising quality.",
    },
    {
      title: "4. Delivery & Beyond",
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
      <div className="w-full  h-fit md:h-screen bg-black flex justify-center items-center">
        <img
          src={herImage}
          alt="herImage"
          className="w-full md:w-4/5 py-2 h-auto"
        />
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="w-3/4 h-fit hero-banner transition-all duration-500 ease-in-out hover:w-4/5">
          <source src={heroImage} type="video/webm" />
          Your browser does not support the video tag.
        </video> */}
      </div>
      <ScrollingAnimation />
      {/* Middle Section */}
      <div
        ref={containerRef}
        className="relative w-full h-fit md:h-screen flex flex-col justify-center items-center bg-black">
        <img
          id="banner"
          src={bgImage}
          alt="bgImage"
          className="w-full h-auto"
        />
        <div className="absolute flex flex-col justify-center items-center md:gap-5 gap-1.5">
          <span className="text-white poppins-medium text-[20px] md:text-[32px] text-center">
            {"The next generation media pipeline."
              .split(" ")
              .map((word, index) => (
                <span
                  key={index}
                  ref={(el) => (textRef.current[index] = el)}
                  className="inline-block overflow-hidden">
                  {word}&nbsp;
                </span>
              ))}
          </span>
          <button className="buttonra p-1 md:p-3 rounded-full poppins-light w-[30px] md:w-[65px] bg-black">
            <img src={icon} alt="Button Asset" />
          </button>
        </div>
      </div>
      {/* What is Anev */}
      <div className="w-full h-fit relative ">
        {/* Image */}
        <img src={starsBg} alt="starsBgImage" className="w-full h-fit z-0" />

        {/* Text Overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10">
          <h2 className=" text-[30px] md:text-[75px]  w-full text-transparent bg-clip-text font-bold  p-2 text-center hatch-background">
            <span className="fonk">WHAT IS ANEV</span>?
          </h2>
          <span className="w-full md:w-1/2 text-white text-center md:text-[24px] text-[15px] p-4 leading-[25px] md:leading-[36px] font-thin tracking-wide">
            ANEV is a next-generation creative agency built to move brands
            forward — fast. We combine sharp strategy, bold storytelling, and
            agile execution to craft impactful content ecosystems that don’t
            just catch attention, but hold it. With ANEV, your brand doesn’t
            just exist online — it leads, resonates, and thrives.
          </span>
        </div>
      </div>
      {/* Services */}
      <div className="w-full h-fit flex flex-col justify-center items-center bg-black md:p-20 p-5 gap-4 md:gap-10">
        <h2 className="text-[30px] md:text-[90px] md:text-left text-center  w-full text-transparent bg-clip-text font-bold  p-2  hatch-background fonk">
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
                <span className="uppercase font-thin text-[20px] text-center text-white">
                  {item.title}
                </span>
              </div>
            </SwiperSlide>
          ))}
          <div className="my-custom-pagination  text-center" />
        </Swiper>
      </div>

      {/* Our Work */}
      <div className="w-full h-fit flex flex-col justify-center items-center bg-black p-5 md:p-20 gap-4 md:gap-10">
        <h2 className="fonk text-[30px] text-center md:text-left md:text-[90px]  w-full text-transparent bg-clip-text font-medium  p-2  hatch-background">
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

      {/* Clientele */}
      <div className="w-full h-fit flex flex-col justify-center items-center bg-black md:p-20 p-4 gap-2 md:gap-10 mt-4 md:mt-0">
        <h2 className="fonk text-[30px] md:text-left text-center md:text-[90px]  w-full text-transparent bg-clip-text font-medium  p-2  hatch-background">
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
            {logos.map((logo, index) => (
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
            {logos.map((logo, index) => (
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
            {logos.map((logo, index) => (
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
          className="hidden w-3/5 md:flex flex-row items-center  justify-center bg-contain bg-top"
          style={{
            backgroundImage: `url(${billboard})`,
            backgroundRepeat: "no-repeat",
          }}>
          <div className="w-4/5 h-[600px] flex-row mt-[100px]">
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
                    {logos2.slice(0, 10).map((logo, index) => (
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
        className="hidden w-full h-fit md:flex flex-col justify-center items-center bg-black p-20 gap-10">
        <h2 className="fonk text-[90px] w-full text-transparent bg-clip-text font-medium p-2 hatch-background">
          OUR PROCESS
        </h2>
        <div className="w-full flex justify-center items-center gap-12">
          {[
            {
              title: "1. Briefing",
              text: "Your brand's vision is our launchpad. We meticulously understand your goals, values, and target audience to kickstart the journey.",
            },
            {
              title: "2. Ideation",
              text: "Our creative minds spin concepts that align with your brand’s essence, ensuring every idea is groundbreaking and strategic.",
            },
            {
              title: "3. Execution",
              text: "From design to development, every step is marked by precision. Your project moves swiftly through each stage without compromising quality.",
            },
            {
              title: "4. Delivery & Beyond",
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
              <span className="uppercase font-thin text-[30px] text-white">
                {item.title}
              </span>
              <span className="text-white font-thin">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      {/* -----------for mobile----------- */}
      <div className="w-full h-fit flex flex-col justify-center items-center bg-black p-5 gap-10 md:hidden">
        <h2 className="fonk text-[40px] text-center w-full text-transparent bg-clip-text font-medium p-2 hatch-background">
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
                <span className="uppercase font-thin text-[24px] text-white">
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

      <div className="relative w-full h-fit flex flex-col justify-center items-center bg-black">
        <img
          id="banner"
          src={bgImage}
          alt="bgImage"
          className="w-full h-auto"
        />
        <div className="absolute flex flex-col justify-center items-center gap-0 md:gap-5">
          <span className=" fonk text-[25px] md:text-[90px] md:text-left text-center w-full  text-white font-medium  p-2  ">
            {" "}
            Digital Magic Together
          </span>
          <button className="buttonr px-6 py-2 md:px-16 md:py-5 md:text-2xl rounded-full poppins-light md:w-[300px] w-[200px] ">
            Get in Touch!
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
