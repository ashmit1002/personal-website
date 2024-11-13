// src/Skills.js
import React from 'react';
import { FaPython, FaJava, FaJs, FaReact, FaDatabase, FaAws, FaFileCode } from 'react-icons/fa';
import { SiCplusplus, SiHtml5, SiCss3, SiJson, SiLatex, SiMongodb, SiPostgresql, SiSqlite, SiPytorch, SiTensorflow, SiJquery, SiIntellijidea, SiVisualstudiocode } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold mb-6">Skills & Additional Information</h2>

      <div className="space-y-6">
        {/* Skills */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold flex items-center">Skills</h3>
          <p className="text-lg mt-4 flex items-center">
            Options Theory, Technical Analysis, Algorithmic Trading
          </p>
        </div>
        
        {/* Languages & Environments */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold">Languages & Environments</h3>
          <p className="text-lg mt-4 flex flex-wrap items-center space-x-3">
            <FaPython />  Python, <SiCplusplus />  C++, <FaJava />  Java, <FaJs />  JavaScript, <FaReact />  React, 
            <SiHtml5 />  HTML, <SiCss3 />  CSS, <SiJson />  JSON, <FaFileCode /> XML, <SiLatex />  LaTeX
          </p>
        </div>

        {/* Databases */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold">Databases</h3>
          <p className="text-lg mt-4 flex items-center space-x-3">
            <SiMongodb />  MongoDB, <SiPostgresql />  PostgreSQL, <SiSqlite />  SQL
          </p>
        </div>

        {/* Tools & Frameworks */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold">Tools & Frameworks</h3>
          <p className="text-lg mt-4 flex items-center space-x-3">
            <SiPytorch />  Pytorch, <SiTensorflow />  TensorFlow, <FaAws />  AWS Lambda, <FaDatabase />  Pandas, Node, Express, <SiJquery />  JQuery, <SiIntellijidea />  IntelliJ, <SiVisualstudiocode />  VS-Code
          </p>
        </div>

        {/* Interests */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold">Interests</h3>
          <p className="text-lg mt-4 flex items-center space-x-3">
            Swimming, Motorcycling, F1, Hockey, Fashion, 
            Pickleball, Lifting, Dancing, Cooking
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
