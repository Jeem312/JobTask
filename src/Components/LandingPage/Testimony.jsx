import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";



const testimonials = [
    {
        id: 1,
        name: "John Doe",
        designation: "CEO",
        image: "https://i.ibb.co/Jv5R4Dh/handsome-elegant-joyful-man-full.jpg",
        feedback:
          "Focus on user-friendly layouts, intuitive interactions, minimalistic design, consistent visuals, and engaging call-to-action elements.",
      },
      {
        id: 2,
        name: "Jane Smith",
        designation: "Marketing Head",
        image: "https://i.ibb.co/FWPRMYc/portrait-smiling-blonde-woman-1.jpg",
        feedback:
          "Create a clean, responsive design with clear navigation, cohesive colors, smooth animations, and readable typography.",
      },
      {
        id: 3,
        name: "Alex Brown",
        designation: "Product Manager",
        image: "https://i.ibb.co/XtyXjXP/handsome-cheerful-young-man-with-stylish-haircut-dimpled-smile-posing-isolated-against-blank-yellow.jpg",
        feedback:
          "Ensure your portfolio design is clean and responsive with consistent typography and a cohesive color palette.and include smooth.",
      },
];

const Testimony = () => {
  return (
    <div className=" py-10 px-6">
      <h2 className="text-4xl font-bold text-white text-center mb-4">Testimonials</h2>
      <p className="text-center text-white mb-10">
      See what our clients say about their experiences with us and our exceptional services.
      </p>
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
         
         modules={[Autoplay,Pagination]}
           className="h-auto"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className=" bg-[#F8F8F8] rounded-lg shadow-lg p-4 flex items-center space-x-6 space-y-4 md:w-[800px] md:h-[250px] mx-auto">
              <img
                src={testimonial.image}
                alt={`Picture of ${testimonial.name}`}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <p className="text-gray-700 italic mb-4"><span className="text-[#FD6F00]">"</span>{testimonial.feedback}<span className="text-[#FD6F00]">"</span></p>
                <h3 className="font-bold text-lg flex text-black justify-start">{testimonial.name}</h3>
                <p className="text-sm text-black text-start mb-3 md:mb-1">{testimonial.designation}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-2 justify-center items-center mx-auto mt-10">
        <div className="bg-[#D9D9D9] rounded-lg p-1 w-10">

        </div>
        
        <div className="bg-[#FD6F00] rounded-lg p-1 w-10">

        </div>
        
        <div className="bg-[#D9D9D9] rounded-lg p-1 w-10">

        </div>
        
      </div>
    </div>
  );
};

export default Testimony;
