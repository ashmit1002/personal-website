// src/Header.js
import React from 'react';
import profilePic from './assets/Shrivastava.Ashmit.Photo.JPEG';

const Header = () => {
  return (
    <div className="relative bg-blue-900 text-white flex flex-col items-center justify-center py-16">
      <img 
        src={profilePic} 
        alt="Ashmit Shrivastava" 
        className="w-48 h-48 rounded-full border-4 border-white shadow-lg mb-6"
      />
      <div className="text-center">
        <h1 className="text-5xl font-bold">Ashmit Shrivastava</h1>
        <p className="text-2xl mt-4">Aspiring Quant & CS Student</p>
        <p className="text-xl mt-2">Exploring the intersection of Computer Science and Finance</p>
      </div>
    </div>
  );
};

export default Header;
