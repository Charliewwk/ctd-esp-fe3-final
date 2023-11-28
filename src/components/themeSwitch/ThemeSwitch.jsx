import React from "react";
import { useGlobal } from "../../context/GlobalContext";
import "./themeSwitch.css"

const ThemeSwitch = () => {
  const { theme, themeDispatch } = useGlobal();

  const toggleTheme = () => {
    themeDispatch({ type: "TOGGLE_THEME" });
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('data-bs-theme', theme.darkMode ? 'light' : 'dark');
  };

  return (

      <img
        className="theme-icon"
        onClick={toggleTheme}
        src={theme.darkMode ? "/src/assets/moon.svg" : "/src/assets/sun.svg"}
        alt="Theme"
      />

  );
};

export default ThemeSwitch;
