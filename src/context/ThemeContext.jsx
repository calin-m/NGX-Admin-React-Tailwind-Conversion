import React, { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({
  themeName: 'corporate',
  isDarkMode: false,
  setThemeName: () => {},
  toggleDarkMode: () => {}
});

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState(() => localStorage.getItem('ngx_theme_name') || 'corporate');
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('ngx_is_dark') === 'true');

  useEffect(() => {
    localStorage.setItem('ngx_theme_name', themeName);
    document.documentElement.setAttribute('data-theme', themeName);
  }, [themeName]);

  useEffect(() => {
    localStorage.setItem('ngx_is_dark', isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{ themeName, isDarkMode, setThemeName, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
export default ThemeProvider;
