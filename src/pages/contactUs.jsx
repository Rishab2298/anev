import React, { useEffect, useState } from "react";

import icon from "./../assets/icon.svg";

const Contact = () => {
  const [canadaTime, setCanadaTime] = useState("");
  const [indiaTime, setIndiaTime] = useState("");

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

      // Set states to trigger re-render
      setCanadaTime(canadaDate);
      setIndiaTime(indiaDate);
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
      <div className="w-full flex justify-center  mt-[100px] p-10 gap-10">
        <div className="w-3/4 pl-4 flex flex-col justify-center">
          <h2 className="fonk text-[120px]  text-center w-full text-transparent bg-clip-text  hatch-background mt-[40px]">
            GET A QUOTE
          </h2>
          <span className="uppercase text-white  text-[30px] leading-[36px] text-center font-thin tracking-wide">
            Take a step towards building an impactful digital <br /> presence,
            together.
          </span>

         

          {/* <div className="flex flex-col gap-4 mt-24">
            <div className="flex  gap-4">
              <input
                type="text"
                placeholder="NAME"
                className=" text-[16px] pl-6 py-3  w-1/2 h-[60px] rounded-md bg-[#1E1E1E]  text-white border border-transparent focus:border-0 outline-none"
              />

              <input
                type="email"
                placeholder="EMAIL"
                className=" text-[16px] pl-6 py-3 w-1/2 h-[60px] rounded-md bg-[#1E1E1E]  text-white border border-transparent focus:border-0 outline-none"
              />
            </div>{" "}
            <textarea
              placeholder="MESSAGE"
              className="resize-y text-[16px] pl-6 py-3 w-full h-[150px] rounded-md bg-[#1E1E1E] text-white border border-transparent focus:border-0 outline-none "
            />
            <button className="uppercase text-[18px] bg-white rounded-md text-center font-medium py-4">
              Send Email
            </button>{" "}
          </div> */}
          <div className="w-full justify-center text-center flex mt-24">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdp8ywH-YJ0ei1TlofkKGZTnxRjxvG_-VDZlQBvuhrDu7cN_Q/viewform?embedded=true" width="640" height="1300" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div></div>
      </div>

      <div className="w-full flex gap-24 my-[200px] justify-center">
        <div className="w-2/5  text-center ">
          <p className="font-thin uppercase poppins text-[30px]  text-neutral-300 ">
            Canada (Toronto)
          </p>
          <p className="gothic text-[80px]   w-full text-transparent bg-clip-text  hatch-background">
            {canadaTime}
          </p>
        </div>
        <div className="w-2/5 text-center">
          <p className="font-thin uppercase poppins text-[30px]  text-neutral-300 ">
            India
          </p>
          <p className="gothic text-[80px]   w-full text-transparent bg-clip-text  hatch-background">
            {indiaTime}
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
