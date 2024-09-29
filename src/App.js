import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Experience from './Experience';  // Combined Projects & Experience
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact'; // Optional

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} /> {/* Optional Contact Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
