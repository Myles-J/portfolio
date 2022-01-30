import React, { useState, createContext, useContext } from 'react';

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export const useTheme = () => useContext(ThemeContext)
export const useThemeUpdate = () => useContext(ThemeUpdateContext)

export default function ThemeProvider({ children }) {
	const [theme, setTheme] = useState('Light');

  const toggleTheme = mode => {
    setTheme(mode)
  }

	return (
		<ThemeContext.Provider value={theme}>
			<ThemeUpdateContext.Provider value={toggleTheme}>
				{children}
			</ThemeUpdateContext.Provider>
		</ThemeContext.Provider>
	);
}
