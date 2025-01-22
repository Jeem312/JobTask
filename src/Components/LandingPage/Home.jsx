import React from 'react';
import Navbar from './NavBar';
import Banner from './Banner';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Services from '../Services';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
<Banner></Banner>
<AboutMe></AboutMe>
<Services></Services>
<Projects></Projects>
<Contact></Contact>

        </div>
    );
};

export default Home;