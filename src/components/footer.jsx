import { ArrowUp, MoveUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [canadaTime, setCanadaTime] = useState("");
  const [indiaTime, setIndiaTime] = useState("");
  const [dubaiTime, setDubaiTime] = useState("");
  const [londonTime, setLondonTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      // Get current time for Canada (Toronto) and India (Kolkata)
      const canadaDate = new Date().toLocaleString("en-IN", {
        timeZone: "America/Toronto",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      const indiaDate = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      // Get current time for Dubai (Gulf Standard Time)
      const dubaiDate = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Dubai",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      // Get current time for London (GMT/BST)
      const londonDate = new Date().toLocaleString("en-IN", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      // Set states to trigger re-render
      setCanadaTime(canadaDate);
      setIndiaTime(indiaDate);
      setLondonTime(londonDate);
      setDubaiTime(dubaiDate);
    };

    // Initial time update
    updateTime();

    // Update the time every second (1000 ms)
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="bgblink w-full flex md:flex-row flex-col gap-24 md:py-[50px] py-[50px] justify-center items-center">
        <div className="w-[90%] md:w-2/5  text-center ">
          <p className="font-thin uppercase poppins md:text-[30px] text-[20px]  text-neutral-300 ">
            Canada (Toronto)
          </p>
          <p className="gothic md:text-[80px] text-[40px]   w-full text-transparent bg-clip-text  hatch-background">
            {canadaTime}
          </p>
        </div>
        <div className="w-[90%] md:w-2/5  text-center">
          <p className="font-thin uppercase poppins md:text-[30px] text-[20px]  text-neutral-300 ">
            India
          </p>
          <p className="gothic md:text-[80px] text-[40px]   w-full text-transparent bg-clip-text  hatch-background">
            {indiaTime}
          </p>
        </div>
      </div>
      <div className="bgblink w-full flex md:flex-row flex-col gap-24 md:py-[50px] py-[50px] justify-center items-center">
        <div className="w-[90%] md:w-2/5  text-center ">
          <p className="font-thin uppercase poppins md:text-[30px] text-[20px]  text-neutral-300 ">
            London
          </p>
          <p className="gothic md:text-[80px] text-[40px]   w-full text-transparent bg-clip-text  hatch-background">
            {londonTime}
          </p>
        </div>
        <div className="w-[90%] md:w-2/5  text-center">
          <p className="font-thin uppercase poppins md:text-[30px] text-[20px]  text-neutral-300 ">
            Dubai
          </p>
          <p className="gothic md:text-[80px] text-[40px]   w-full text-transparent bg-clip-text  hatch-background">
            {dubaiTime}
          </p>
        </div>
      </div>
      <div className="bgblink fonk w-full flex md:flex-row flex-col items-center justify-between px-[100px] py-[50px] ">
        <div className="w-fit justify-center flex gap-[75px]">
          <a
            className="fonk text-white md:text-left text-center w-full poppins-medium hover:underline hover:text-orange-300"
            href="https://instagram.com/anevmedia">
            <span className="fonk uppercase">Instagram</span>
          </a>
        </div>
        <div className="hidden w-fit md:flex text-white font-semibold gap-4">
          SCROLL TO TOP
          <ArrowUp color="white" strokeWidth={2} />
        </div>
      </div>
    </>
  );
};

export default Footer;
