// src/Skills.js
import React from 'react';

const Skills = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold mb-6">Skills & Additional Information</h2>

      <div className="space-y-6">
        {/* Languages & Environments */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold">Languages & Environments</h3>
          <p className="text-lg mt-4">Python, Java, JavaScript, React, HTML, CSS, JSON, XML, LaTeX</p>
        </div>

        {/* Databases */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold">Databases</h3>
          <p className="text-lg mt-4">MongoDB, PostgreSQL, SQL</p>
        </div>

        {/* Tools & Frameworks */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold">Tools & Frameworks</h3>
          <p className="text-lg mt-4">Node, Express, JQuery, IntelliJ, VS-Code</p>
        </div>

        {/* Interests */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold">Interests</h3>
          <p className="text-lg mt-4">Swimming, Motorcycling, F1, Hockey, Fashion, Pickleball, Lifting, Dancing, Cooking</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
