// src/contexts/ThemeContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Create a Context for the theme
const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);

// Provider component to wrap the app and provide theme context
export const ThemeProvider = ({ children }) => {
  // State to track whether dark mode is enabled
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle between dark and light mode
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle darkMode state
    document.body.classList.toggle('dark-mode'); // Toggle 'dark-mode' class on body
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children} {/* Render children components with access to theme context */}
    </ThemeContext.Provider>
  );
};
