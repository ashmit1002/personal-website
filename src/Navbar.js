// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white shadow-lg">
      <ul className="flex justify-center space-x-8 py-4">
        <li>
          <Link to="/" className="text-lg hover:text-gray-300 transition duration-300">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-lg hover:text-gray-300 transition duration-300">About</Link>
        </li>
        <li>
          <Link to="/education" className="text-lg hover:text-gray-300 transition duration-300">Education</Link>
        </li>
        <li>
          <Link to="/skills" className="text-lg hover:text-gray-300 transition duration-300">Skills</Link>
        </li>
        <li>
          <Link to="/experience" className="text-lg hover:text-gray-300 transition duration-300">Experience</Link>
        </li>
        <li>
          <Link to="/contact" className="text-lg hover:text-gray-300 transition duration-300">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
