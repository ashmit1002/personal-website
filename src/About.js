// src/About.js
import React from 'react';
import resumePDF from './assets/Shrivastava.Ashmit.Resume.pdf';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        Hey! Nice to meet you! I am a freshman at the University of Michigan studying Computer Science at the College of Engineering. 
        My interests lie in the quantitative analysis side of finance, meeting the crossroads of computer science, applied math, 
        and statistics.
      </p>
      <p className="text-lg text-gray-800 mb-6">
        For any inquiries, feel free to reach me at <span className="font-semibold">ashmits@umich.edu</span>.
      </p>
      
      <a 
        href={resumePDF} 
        download="Ashmit_Shrivastava_Resume.pdf"
        className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
      >
        Download My Resume
      </a>
    </div>
  );
};

export default About;
