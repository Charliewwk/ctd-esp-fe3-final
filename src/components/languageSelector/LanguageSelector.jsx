// LanguageSelector.jsx
import React from "react";
import { useGlobal } from "../../context/GlobalContext";

const LanguageSelector = () => {
  const { state, dispatch } = useGlobal();

  const changeLanguage = (newLanguage) => {
    dispatch({ type: "CHANGE_LANGUAGE", payload: newLanguage });
  };

  return (
    <div>
      {/* ... (resto del código) */}
    </div>
  );
};

export default LanguageSelector;
