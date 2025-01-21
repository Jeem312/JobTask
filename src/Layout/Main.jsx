import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/LandingPage/NavBar';
import Footer from '../Components/LandingPage/Footer';

const Main = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Main;