// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" text-white flex items-center justify-between px-6 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <div className="bg-orange-500 text-white font-bold text-lg rounded-full w-10 h-10 flex items-center justify-center">
          MV
        </div>
        <h1 className="ml-3 text-xl text-white"><span className=' font-bold'>M</span>umair</h1>
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
        <Link to="/" className="hover:text-[#FD6F00]" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/about" className="hover:text-[#FD6F00]" onClick={toggleMenu}>
          About Me
        </Link>
        <Link
          to="/services"
          className="hover:text-[#FD6F00]"
          onClick={toggleMenu}
        >
          Services
        </Link>
        <Link
          to="/projects"
          className="hover:text-[#FD6F00]"
          onClick={toggleMenu}
        >
          Projects
        </Link>
        <Link
          to="/testimonials"
          className="hover:text-[#FD6F00]"
          onClick={toggleMenu}
        >
          Testimonials
        </Link>
        <Link
          to="/contact"
          className="hover:text-[#FD6F00]"
          onClick={toggleMenu}
        >
          Contact
        </Link>
        <a
          href="/path-to-your-cv.pdf"
          download
          className="bg-[#FD6F00] hover:text-[#FD6F00] text-white font-semibold px-4 py-2 rounded transition"
          onClick={toggleMenu}
        >
          Download CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
