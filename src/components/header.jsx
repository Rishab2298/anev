import React, { use } from 'react'

import logo from '../assets/logo.png'
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current path

  return (
    <div className=" absolute w-full bg-black flex justify-between items-center p-[32px]">
      <div className="w-[100px]">
        <img src={logo} alt="logo" />
      </div>
      <div className="rounded-full uppercase font-light flex gap-[35px] px-10 h-[50px] items-center text-white">
        <Link
          to="/"
          className={`text-[15px] leading-4 opacity-80 hover:text-[#FF7B1C] ${
            location.pathname === "/" ? "text-[#FF7B1C] font-semibold " : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`text-[15px] leading-4 opacity-80 hover:text-[#FF7B1C] ${
            location.pathname === "/about" ? "text-[#FF7B1C] font-semibold " : ""
          }`}
        >
          About
        </Link>
        <Link
          to="/work"
          className={`text-[15px] leading-4 opacity-80 hover:text-[#FF7B1C] ${
            location.pathname === "/work" ? "text-[#FF7B1C] font-semibold " : ""
          }`}
        >
          Work
        </Link>
        <Link
          to="/#pipeline"
          className="text-[15px] leading-4 opacity-80 hover:text-[#FF7B1C]"
        >
          Pipeline
        </Link>
        <Link
          to="/contact-us"
          className={`text-[15px] leading-4 opacity-80 hover:text-[#FF7B1C] ${
            location.pathname === "/contact-us" ? "text-[#FF7B1C] font-semibold " : ""
          }`}
        >
          Contact Us
        </Link>
      </div>
      <button
        className="buttona px-8 h-[50px] text-[15px] leading-4 opacity-80 uppercase font-light"
        onClick={() => navigate("/contact-us")}
      >
        Let's Talk
      </button>
    </div>
  );
};

export default Header;
