import React, { useContext, useState } from "react";
import Counter from "./Counter";
const lightTheme = {
  backgroundColor: "#eee",
};
const darkTheme = {
  backgroundColor: "#333",
};
const ThemeContext = React.createContext(darkTheme);
function ThemedBox() {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme.backgroundColor }}>
      Hallo React Context!
    </div>
  );
}
function ThemedApp() {
  const [theme, setTheme] = useState(lightTheme);
  return (
    <>
      <ThemedBox />
      <button
        onClick={() => {
          setTheme(theme === lightTheme ? darkTheme : lightTheme);
        }}
      >
        Umschalten
      </button>
      <ThemeContext.Provider value={theme}>
        <ThemedBox />
        <Counter />
      </ThemeContext.Provider>
    </>
  );
}

export default ThemedApp;
