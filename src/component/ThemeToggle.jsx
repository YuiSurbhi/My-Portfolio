import React, { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply the theme to the body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark"); // Add dark mode class
    } else {
      document.documentElement.classList.remove("dark"); // Remove dark mode class
    }
  }, [isDarkMode]);

  return (
    <div className="absolute top-12 right-15 z-55">
      <button
        onClick={() => setIsDarkMode(!isDarkMode)} // Toggle between dark and light modes
        className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 shadow-md focus:outline-none"
      >
        {isDarkMode ? (
          <FiSun className="w-6 h-6 text-yellow-500" />
        ) : (
          <FiMoon className="w-6 h-6 text-gray-100" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
