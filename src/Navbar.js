// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white shadow-lg">
      <ul className="flex justify-center space-x-8 py-4">
        {['About', 'Experience', 'Skills', 'Education', 'Contact'].map((item) => (
          <li key={item}>
            <Link
              to={`/${item.toLowerCase()}`} // Links will be in lowercase
              className="text-lg transition duration-300 transform hover:scale-105 hover:text-gray-300 active:scale-95"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
