import React, { use, useState } from 'react'

import logo from '../assets/images/anevMediaLogo.png';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail, Menu, X } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current path
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    setMobileMenuOpen(false); // Close the menu after navigation
  };
  return (<>
    {/* <div className=" absolute w-full bg-black flex justify-between items-center p-[32px]">
      <div className="w-[100px] cursor-pointer " onClick={() => navigate("/")}>
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
          to="/contact-us"
          className={`text-[15px] leading-4 opacity-80 hover:text-[#FF7B1C] ${
            location.pathname === "/contact-us" ? "text-[#FF7B1C] font-semibold " : ""
          }`}
        >
          Contact Us
        </Link>
      </div>
      <button
        className="buttona px-8 h-[50px] text-[15px] leading-4 opacity-80 uppercase font-light cursor-pointer"
        onClick={() => navigate("/contact-us")}
      >
        Let's Talk
      </button>
    </div> */}

     {/* Main Header */}
     <div className="w-full bg-black flex justify-between items-center p-4 md:p-8  top-0 z-50">
        {/* Mobile: Hamburger */}
        <div className="md:hidden">
          <Menu
            className="text-white w-6 h-6 cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
          />
        </div>

        {/* Logo */}
        <div
          className="w-[100px] cursor-pointer flex justify-center"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="logo" className="max-h-[40px]" />
        </div>

        {/* Desktop Nav Links */}
        <div className="fonk hidden md:flex rounded-full uppercase font-light gap-10 px-10 h-[50px] items-center text-white">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`md:text-[15px]  text-[14px] leading-4 opacity-80 hover:text-[#FF7B1C] ${
                location.pathname === path ? "text-[#FF7B1C] font-semibold" : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Let's Talk Button */}
        <button
          className="hidden md:block buttona  md:px-8 h-[50px] text-[14px] md:text-[14px] leading-4 opacity-80 uppercase font-light text-white border border-white"
          onClick={() => navigate("/contact-us")}
        >
          <span className='fonk'>Let</span>'<span className='fonk'>s Talk</span>
        </button>
<Link to={"/contact-us"} className=' md:hidden flex'>
        <Mail className='' strokeWidth={2} size={25} color='white'/>
        </Link>
      </div>

      {/* Mobile Sidebar Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black z-50 p-6 flex flex-col gap-8 text-white transition-transform duration-300">
          {/* Close Icon */}
          <X
            className="w-6 h-6 self-end cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Nav Links */}
          {navLinks.map(({ name, path }) => (
            <div
              key={name}
              className={`cursor-pointer uppercase text-[15px] text-center ${
                location.pathname === path ? "text-[#FF7B1C] font-semibold" : ""
              }`}
              onClick={() => handleNavigate(path)}
            >
              {name}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
