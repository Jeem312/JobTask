// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" text-white flex items-center justify-between px-6 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <div className="bg-orange-500 text-black font-bold text-lg rounded-full w-10 h-10 flex items-center justify-center">
          MV
        </div>
        <h1 className="ml-3 text-xl font-bold">Mumair</h1>
      </div>

      {/* Menu Links */}
      <div className="flex space-x-6 text-white">
        <Link to="/" className="hover:text-[#FD6F00]">
          Home
        </Link>
        <Link to="/about" className="hover:text-[#FD6F00]">
          About Me
        </Link>
        <Link to="/services" className="hover:text-[#FD6F00]">
          Services
        </Link>
        <Link to="/projects" className="hover:text-[#FD6F00]">
          Projects
        </Link>
        <Link to="/testimonials" className="hover:text-[#FD6F00]">
          Testimonials
        </Link>
        <Link to="/contact" className="hover:text-[#FD6F00]">
          Contact
        </Link>
      </div>

      {/* Download CV Button */}
      <div>
        <a
          href="/path-to-your-cv.pdf"
          download
          className="bg-[#FD6F00] hover:text-[#FD6F00] text-black font-semibold px-4 py-2 rounded transition"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
