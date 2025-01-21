import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      
      
               <footer className="footer footer-center  text-primary-content mt-24 ">
  <aside>
  <div className="flex items-center">
        <div className="bg-orange-500 text-white font-bold text-lg rounded-full w-10 h-10 flex items-center justify-center">
          MV
        </div>
        <h1 className="ml-3 text-4xl text-white"><span className=' font-bold'>M</span>umair</h1>
      </div>
   <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-white gap-6 font-semibold mt-6'>
    
   <Link to="/" className="hover:text-[#FD6F00]">
          Home
        </Link>
        <Link to="/about" className="hover:text-[#FD6F00]">
          About Me
        </Link>
        <Link
          to="/services"
          className="hover:text-[#FD6F00]"
          
        >
          Services
        </Link>
        <Link
          to="/projects"
          className="hover:text-[#FD6F00]"
        
        >
          Projects
        </Link>
        <Link
          to="/testimonials"
          className="hover:text-[#FD6F00]"
         
        >
          Testimonials
        </Link>
        <Link
          to="/contact"
          className="hover:text-[#FD6F00]"
          
        >
          Contact
        </Link>
   </div>
  </aside>
  <nav>
    <div className="grid grid-cols-4 gap-4">
     <a href="#" className="text-white hover:text-white">
                <FaFacebook size={30} />
              </a>
              <a href="#" className="text-white hover:text-white">
                <FaTwitter size={30} />
              </a>
              <a href="#" className="text-white hover:text-white">
                <CiLinkedin size={30} />
              </a>
              <a href="#" className="text-white hover:text-white">
                <FaInstagram size={30} />
              </a>
    </div>
  </nav>

 <div className='bg-black w-full p-4 text-white'>
 <aside className=''>
    <p>Copyright © {new Date().getFullYear()} -<span className='text-[#FD6F00]'>Mummir</span> All right reserved,Inc</p>
  </aside>
 </div>

</footer>
      
    );
};

export default Footer;