import React, { createContext, useState, useContext, useEffect } from 'react';
import { useColorScheme } from 'react-native';

// Define our theme colors
const lightTheme = {
  background: '#F9F5F0',
  text: '#333333',
  primary: '#8B5A2B',
  secondary: '#D2B48C',
  accent: '#FF9800',
  card: '#FFFFFF',
  cardShadow: 'rgba(0, 0, 0, 0.1)',
  statusBar: 'dark-content',
  paws: 'rgba(139, 90, 43, 0.1)', // Light paw print pattern
};

const darkTheme = {
  background: '#222222',
  text: '#F0F0F0',
  primary: '#A67C52',
  secondary: '#8B5A2B',
  accent: '#FFB74D',
  card: '#333333',
  cardShadow: 'rgba(0, 0, 0, 0.3)',
  statusBar: 'light-content',
  paws: 'rgba(166, 124, 82, 0.15)', // Dark paw print pattern
};

// Create the context
const ThemeContext = createContext({
  isDark: false,
  colors: lightTheme,
  setScheme: () => {},
});

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Get device color scheme
  const deviceColorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(deviceColorScheme === 'dark');

  // Listen for changes in device appearance
  useEffect(() => {
    setIsDark(deviceColorScheme === 'dark');
  }, [deviceColorScheme]);

  // Toggle between light and dark modes
  const setScheme = (scheme) => {
    setIsDark(scheme === 'dark');
  };

  const theme = {
    isDark,
    colors: isDark ? darkTheme : lightTheme,
    setScheme: setScheme,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};