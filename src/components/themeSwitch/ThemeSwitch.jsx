// ThemeSwitch.jsx
import React from "react";
import { useGlobal } from "../../context/GlobalContext";

const ThemeSwitch = () => {
  const { state, dispatch } = useGlobal();

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <div>
      {/* ... (resto del código) */}
    </div>
  );
};

export default ThemeSwitch;
