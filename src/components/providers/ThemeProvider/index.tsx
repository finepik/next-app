import { GlobalStyle, darkTheme, lightTheme } from "@/styles/theme";
import { PropsWithChildren, createContext, useState } from "react";
import { ThemeProvider as Theme } from "styled-components";

export const ThemeContext = createContext<{
  theme: string;
  switchTheme: () => void;
} | null>(null);

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <Theme theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle></GlobalStyle>
        {children}
      </Theme>
    </ThemeContext.Provider>
  );
};
