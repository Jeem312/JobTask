import React from 'react';
import img1 from '../assets/Vector.png';
import img2 from '../assets/Layer_1.png';
import img3 from '../assets/Group 18.png';
import img4 from '../assets/Vector (1).png';

const Services = () => {
  const servicesData = [
    {
      img: img1,
      title: 'UI/UX Design',
      description: 'Crafting user-friendly interfaces that provide seamless and engaging experiences, ensuring users can navigate and interact with your product effortlessly.',
    },
    {
      img: img2,
      title: 'Web Design',
      description: 'Developing visually appealing and functional websites that effectively communicate your brand message and meet your business objectives.',
    },
    {
      img: img3,
      title: 'App Design',
      description: 'Designing  interactive mobile applications tailored to meet user needs,and satisfaction across various devices.',
    },
    {
      img: img4,
      title: 'Graphic Design',
      description: 'Creating compelling visual content, including logos, brochures, and marketing materials, to effectively convey your brand\'s message and captivate your audience.',
    },
  ];

  return (
    <div className='my-24'>
      <h1 className='font-bold text-3xl text-white'>Services</h1>
      <p className='text-white mt-4'>
        I design intuitive and engaging user interfaces, focusing on seamless user experiences.
        <br />
        Explore my portfolio to see how I blend aesthetics with functionality.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 text-black  rounded-lg p-4 mt-6'>
        {servicesData.map((service, index) => (
          <div key={index} className=' bg-[#F8F8F8] hover:bg-[#FD6F00] hover:text-white rounded-lg p-4 my-4  '>
            <img src={service.img} alt={service.title} className='mb-2 w-10' />
            <h3 className='font-semibold flex justify-start'>{service.title}</h3>
            <p className='text-start'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
