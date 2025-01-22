import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div
      className="min-h-screen flex flex-col justify-end items-center pb-10 overflow-hidden"
      style={{
        backgroundImage: `url('https://i.ibb.co/DCcxwZ0/6325254.jpg')`,
        backgroundSize: 'contain', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="text-center">
        <Link to="/">
          <button className="btn btn-wide bg-teal-400 text-white border border-white">
            Go Home
          </button>
        </Link>
      </div>
    </div>
    );
};

export default ErrorPage;