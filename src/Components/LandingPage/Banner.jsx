import React from "react";
import img from "../../assets/young-bearded-man-with-striped-shirt.jpg"
const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-20  text-white h-screen px-10">
      {/* Left Section */}
      <div className="flex flex-col md:flex-1">
        <p className="md:text-start">Hi I am </p>
        <p className="text-2xl font-bold text-[#FD6F00] mb-6 md:text-start">
          Muhammad Umair
        </p>
        <h1 className=" text-5xl font-bold md:text-start">UI & UX</h1>
        <h1 className=" text-6xl font-bold my-3 md:mr-48 ">Designer </h1>
        <p className="md:text-start text-lg text-gray-300">
  I am passionate about crafting beautiful and user-friendly interfaces that provide an exceptional user experience. Let’s work together to bring your ideas to life!
</p>

        <div className=" flex md:justify-start mt-4">
        <button className="bg-[#FD6F00] hover:text-[#FD6F00] text-white font-semibold py-2 px-6 rounded transition">
          Hire Me
        </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative ">
        <div className="w-[300px] h-[300px] rounded-full overflow-hidden border-8 border-[#FD6F00]">
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