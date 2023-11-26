import React from "react";
import { useGlobal } from "../../context/GlobalContext";

const ThemeSwitch = () => {
/*   const { state, dispatch } = useGlobal();

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

 */  return (
    <div>
{/*       <label className="d-flex">
        <img className="theme-icon" src="/src/assets/brightness-high.svg" alt="Theme" />
        <form className="form-check form-switch ms-0 mb-0">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            checked={state.theme.darkMode}
            onChange={toggleTheme}
          />
        </form>
      </label>
 */}    </div>
  );
};

export default ThemeSwitch;