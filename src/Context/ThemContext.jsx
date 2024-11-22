import React, { createContext, useContext } from "react";

const ThemeContext = createContext({
  theme: "dark",
  lightTheme: () => {},
  darkTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function UseContext() {
  return useContext(ThemeContext);
}
