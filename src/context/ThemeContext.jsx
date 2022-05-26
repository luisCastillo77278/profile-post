import { createContext, useState } from "react"

export const ThemeDark = {
  type: 'dark',
  colors: {
    primary: "#571089",
    background: "#130007",
    text: "#faedcb",
    darkBackground: "#faedcb",
    lightText: "#000",
    primaryText: "#f2274c"
  }
};

export const ThemeLight = {
  type: 'light',
  colors: {
    // color: '#0aa354',
    primary: "#161314",
    text: "#000",
    background: "#fff",
    lightText: "#fff",
    primaryText: "#f2274c",
    darkBackground: "#17202a "
  }
}

export const ThemeContext = createContext(ThemeLight);

const ThemeProvider = ({ children }) =>{
  const [theme, setTheme] = useState(ThemeLight);
  return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>
}

export default ThemeProvider;