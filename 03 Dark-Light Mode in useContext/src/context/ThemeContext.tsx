import { ReactNode, createContext, useContext, useState } from "react";

type ContextType = { darkMode: boolean; changeMode: () => void };

const initialTheme: ContextType = {
  darkMode: true,
  changeMode: () => {},
};

export const ThemeContext = createContext<ContextType>(initialTheme);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const changeMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeProvider;
