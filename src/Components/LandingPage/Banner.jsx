// src/components/Banner.jsx
import React from "react";
import img from "../../assets/young-bearded-man-with-striped-shirt.jpg"
const Banner = () => {
  return (
    <div className="flex justify-between items-center  text-white h-screen px-10">
      {/* Left Section */}
      <div className="flex flex-col">
        <h1 className="text-6xl font-bold text-orange-500 mb-6">
          Muhammad Umair
        </h1>
        <button className="bg-[#FD6F00] hover:text-[#FD6F00] text-white font-semibold py-3 px-6 rounded transition">
          Hire Me
        </button>
      </div>

      {/* Right Section */}
      <div className="relative">
        <div className="w-[300px] h-[300px] rounded-full overflow-hidden border-8 border-orange-500">
          <img
            src={img}
            alt="Muhammad Umair"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
