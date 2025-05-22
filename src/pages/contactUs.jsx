import React, { useEffect, useState } from "react";

import icon from "./../assets/icon.svg";

const Contact = () => {
 
  return (
    <>
      <div className="bgblink w-full flex flex-col items-center justify-center  pt-5 md:pt-[100px] p-0 md:p-10 md:gap-10 gap-5">
        <div className="w-[90%] md:w-3/4  flex flex-col justify-center gap-5">
          <h2 className="fonk text-[60px] md:text-[120px] leading-[70px] md:leading-normal text-center w-full text-transparent bg-clip-text  hatch-background mt-[40px]">
            GET A QUOTE
          </h2>
          <span className="uppercase text-white  text-[20px] leading-[26px] md:text-[30px] md:leading-[36px] text-center font-thin tracking-wide">
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
          </div>
          <div className="bgblink w-full justify-center text-center flex mt-10 md:mt-24">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdp8ywH-YJ0ei1TlofkKGZTnxRjxvG_-VDZlQBvuhrDu7cN_Q/viewform?embedded=true" width="640" height="1500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
      </div>

     
    </>
  );
};

export default Contact;
