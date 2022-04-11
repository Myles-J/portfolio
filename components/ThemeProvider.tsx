import React, { useState, createContext, useContext } from 'react';

const ThemeContext = createContext(null);
const ThemeUpdateContext = createContext(null);

export const useTheme = () => useContext(ThemeContext)
export const useThemeUpdate = () => useContext(ThemeUpdateContext)

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('Light');
  const toggleTheme = (mode: React.SetStateAction<string>) => setTheme(mode)

	return (
		<ThemeContext.Provider value={theme}>
			<ThemeUpdateContext.Provider value={toggleTheme}>
				{children}
			</ThemeUpdateContext.Provider>
		</ThemeContext.Provider>
	);
}

export default ThemeProvider;
