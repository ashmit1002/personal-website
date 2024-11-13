// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
// import Header from './Header';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} /> {/* Redirect root path to "About" page */}
          <Route path="/about" element={<About />} /> {/* Display About page content here */}
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;