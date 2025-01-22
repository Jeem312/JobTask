import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import cv from "../../assets/Shanjida_Jeem's_ resume.pdf"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownloadCV = () => {
    toast.success("CV Downloaded Successfully!");
  };

  return (
    <nav className="text-white flex items-center justify-between px-6 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <div className="bg-orange-500 text-white font-bold text-lg rounded-full w-10 h-10 flex items-center justify-center">
          MV
        </div>
        <h1 className="ml-3 text-xl text-white">
          <span className="font-bold">M</span>umair
        </h1>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center z-20">
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="text-2xl text-[#FD6F00]" />
          ) : (
            <FaBars className="text-2xl text-[#FD6F00]" />
          )}
        </button>
      </div>

      {/* Menu Links */}
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-2/3 h-full  text-white flex flex-col items-start justify-center space-y-6 px-6 py-4 transition-transform duration-300 md:static md:translate-x-0 md:flex md:flex-row md:items-center md:justify-end md:space-y-0 md:space-x-6`}
      >
        <Link
          to="banner"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-[#FD6F00]"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          to="/about"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-[#FD6F00]"
          onClick={toggleMenu}
        >
          About Me
        </Link>
        <Link
          to="/services"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-[#FD6F00]"
          onClick={toggleMenu}
        >
          Services
        </Link>
        <Link
          to="/projects"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-[#FD6F00]"
          onClick={toggleMenu}
        >
          Projects
        </Link>
        <Link
          to="/testimonials"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-[#FD6F00]"
          onClick={toggleMenu}
        >
          Testimonials
        </Link>
        <Link
          to="/contact"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-[#FD6F00]"
          onClick={toggleMenu}
        >
          Contact
        </Link>
        <a
       href={cv}
         
          className="btn bg-[#FF5400] text-white flex items-center"
          onClick={handleDownloadCV}
        >
          Download CV
        </a>
      </div>

      <Toaster />
    </nav>
  );
};

export default Navbar;
