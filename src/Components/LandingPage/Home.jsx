import React from 'react';
import Navbar from './NavBar';
import Banner from './Banner';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Services from '../Services';

const Home = () => {
    return (
        <div>
<Banner></Banner>
<AboutMe></AboutMe>
<Services></Services>
<Contact></Contact>

        </div>
    );
};

export default Home;