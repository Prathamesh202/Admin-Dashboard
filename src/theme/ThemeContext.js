// src/theme/ThemeContext.js
import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../theme';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeConfig = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme]
  );

  const appliedTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={themeConfig}>
      <ThemeProvider theme={appliedTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
