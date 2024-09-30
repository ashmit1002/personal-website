// src/Leetcode_Chunk.js
import React, { useState, useRef, useEffect } from 'react';
import LinkIcon from '@mui/icons-material/Link';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CodeIcon from '@mui/icons-material/Code';

const Leetcode_Chunk = ({ title, problemLink, youtubeLink, code, codeLink }) => {
  const [showCode, setShowCode] = useState(false);  // State to manage code box visibility
  const chunkRef = useRef(null); // Reference to the Leetcode_Chunk div
  const [chunkHeight, setChunkHeight] = useState('auto'); // State to store the height of Leetcode_Chunk

  // Set the height of the Code Box to match the height of the Leetcode_Chunk div
  useEffect(() => {
    if (chunkRef.current) {
      setChunkHeight(chunkRef.current.offsetHeight + 'px'); // Get the height of the chunk and set it
    }
  }, [showCode]); // Update height whenever the code box is toggled

  return (
    <div
      ref={chunkRef}
      className="relative p-6 bg-gray-100 shadow-lg rounded-lg mb-6 transition transform hover:scale-105 hover:shadow-2xl"
      style={{ width: '50rem' }}  // Set custom width for Leetcode_Chunk
    >
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>

      {/* Buttons Layout */}
      <div className="flex justify-between mb-2">
        {/* Leetcode Problem Link with LinkIcon */}
        <a
          href={problemLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-lg text-blue-600 hover:text-blue-800 hover:underline transition flex-1 text-center"
        >
          <LinkIcon className="mr-1" /> View LeetCode Problem
        </a>

        {/* YouTube Explanation Link with YouTubeIcon */}
        <a
          href={youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-lg text-red-600 hover:text-red-800 hover:underline transition flex-1 text-center"
        >
          <YouTubeIcon className="mr-1" /> Watch Video Explanation
        </a>

        {/* Python Code Link with CodeIcon */}
        <button
          onClick={() => setShowCode(!showCode)} // Toggle code visibility
          className="flex items-center text-lg text-green-600 hover:text-green-800 hover:underline transition flex-1 text-center"
        >
          <CodeIcon className="mr-1" /> View Python Code
        </button>
      </div>

      {/* Code Box that appears below the buttons */}
      {showCode && (
        <div
          className="mt-4 bg-white border border-gray-300 rounded-lg p-4 overflow-y-auto shadow-lg"
          style={{ height: chunkHeight, width: '100%' }} // Full width of the chunk
        >
          <h4 className="text-lg font-semibold mb-2">Python Code:</h4>
          <pre className="whitespace-pre-wrap text-sm text-gray-700">
            {code}
          </pre>
        </div>
      )}
    </div>
  );
};

export default Leetcode_Chunk;
