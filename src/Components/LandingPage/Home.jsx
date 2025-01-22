import React from 'react';
import Navbar from './NavBar';
import Banner from './Banner';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Services from '../Services';
import Projects from './Projects';
import Testimony from './Testimony';
import { Element } from 'react-scroll';



const Home = () => {
  return (
    <div>
      
      <Element name="banner" >
       <Banner/>
      </Element>
      <Element name="about">
        <AboutMe/>
      </Element>
      <Element name="services">
        <Services/>
      </Element>
      <Element name="projects" >
       <Projects/>
      </Element>
      <Element name="testimonials">
      <Testimony/>
      </Element>
      <Element name="contact" >
       <Contact/>
      </Element>
    </div>
  );
};

export default Home;

     