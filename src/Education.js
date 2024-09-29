// src/Education.js
import React from 'react';

const Education = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold mb-6">Education</h2>

      {/* University of Michigan */}
      <div className="p-6 bg-white shadow-lg rounded-lg mb-8">
        <h3 className="text-2xl font-semibold">University of Michigan, College of Engineering</h3>
        <p className="italic text-gray-500">BSE in Computer Science, Minor in Mathematics</p>
        <p className="text-lg mt-2">Expected Graduation: May 2028</p>
        <p className="text-lg mt-2 text-gray-700">Ann Arbor, MI</p>
        <p className="text-lg mt-2"><strong>Cumulative GPA:</strong> 4.0/4.0</p>
        <p className="text-lg mt-2"><strong>Relevant Coursework:</strong> E-Comm Entrep, Discrete Math, Programming & Data Structures, Intro to Engineering</p>
        <p className="text-lg mt-2"><strong>Extracurricular Involvement:</strong> Co-writing “AI Landscape Basic to Advance” journal with Prof. Pravin Chopade</p>
      </div>

      {/* Troy High School */}
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-semibold">Troy High School</h3>
        <p className="italic text-gray-500">Graduated Summa Cum Laude (August 2020 - May 2024)</p>
        <p className="text-lg mt-2">Troy, MI</p>
        <p className="text-lg mt-2"><strong>Cumulative GPA:</strong> 4.33/4.0</p>
        <p className="text-lg mt-2"><strong>Relevant Coursework:</strong> Calculus III, Linear Algebra, AP Physics C Mech + E&M, AP Calculus BC, AP Statistics, AP Macroeconomics, AP Microeconomics</p>
        <p className="text-lg mt-2"><strong>Honors & Awards:</strong> DECA SCDC 1st Place (2023, 2024), ICDC Finalist (2023), HOSA ILC Qualifier (2023, 2024), TSA State TEAMS 1st (2023, 2024), TSA State Coding 4th (2023), Michigan Swimming Class of 2024 Top 100</p>
        <p className="text-lg mt-2"><strong>Extracurricular Involvement:</strong> USACO Gold Division, Built web-app clones, DECA Chapter President, HOSA State President Candidate, TSA Outreach Lead, MICS President, Detroit Education Society President, Balbharati President</p>
      </div>
    </div>
  );
};

export default Education;
