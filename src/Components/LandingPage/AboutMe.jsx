import React, { useState } from "react";
import img from "../../assets/young-bearded-man-with-striped-shirt (1).jpg"
const AboutMe = () => {
  // State to manage range values
  const [ux, setUx] = useState(85);
  const [webDesign, setWebDesign] = useState(90);
  const [appDesign, setAppDesign] = useState(75);
  const [graphicDesign, setGraphicDesign] = useState(60);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between   text-white">
      {/* Left Section */}
      <div className="relative w-60 h-60 md:w-80 md:h-80">
        {/* Image with overlay */}
        <div className="absolute inset-0  "></div>
        <img
          src={img}
          alt="Person"
          className="w-full h-full object-cover rounded-full border-8 border-[#FD6F00]"
        />
      </div>

      {/* Right Section */}
      <div className=" w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4 md:text-start">About Me</h2>
        <p className="mb-6 text-gray-300 text-start">
  I'm Muhammad Umair, a passionate UI/UX Designer focused on creating visually appealing and user-friendly digital experiences. With expertise in design principles and a keen eye for detail, I strive to craft intuitive interfaces that solve real problems and enhance user satisfaction.
</p>


        {/* Progress Bars */}
        <div className="space-y-6">
          <div>
            <p className="text-lg mx-2 font-semibold text-start">UX</p>
            <input
              type="range"
              min="0"
              max="100"
              value={ux}
              onChange={(e) => setUx(e.target.value)} 
              className="range range-warning"
            />
          
          </div>
          <div>
            <p className="text-lg mx-2 font-semibold text-start">Website Design</p>
            <input
              type="range"
              min="0"
              max="100"
              value={webDesign}
              onChange={(e) => setWebDesign(e.target.value)} 
              className="range range-warning"
            />
            
          </div>
          <div>
            <p className="text-lg mx-2 font-semibold text-start">App Design</p>
            <input
              type="range"
              min="0"
              max="100"
              value={appDesign}
              onChange={(e) => setAppDesign(e.target.value)} 
              className="range range-warning"
            />
           
          </div>
          <div>
            <p className=" mx-2 text-lg font-semibold text-start">Graphic Design</p>
            <input
              type="range"
              min="0"
              max="100"
              value={graphicDesign}
              onChange={(e) => setGraphicDesign(e.target.value)} 
              className="range range-warning"
            />
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
