import React from "react";
import { useGlobal } from "../../context/GlobalContext";

const LanguageSelector = () => {
  const { theme, language, languageDispatch } = useGlobal();

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Spanish" },
    { code: "pt", label: "Português" },
  ];

  const handleLanguageChange = (selectedLanguage) => {
    if (language.language !== selectedLanguage) {
      console.log('Lenguaje anterior: ', language.language);
      console.log('Lenguaje actual: ', selectedLanguage)
      languageDispatch({
        type: "TOGGLE_LANGUAGE",
        payload: selectedLanguage,
      });
    }
  };

  return (
    <div className="dropstart">
      <span
        className="dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          className={`${theme.darkMode ? "invert-color" : ""}`}
          src="/src/assets/globe.svg"
          alt="Language"
        />
      </span>
      <ul className="dropdown-menu">
        {languages.map((lang) => (
          <li key={lang.code}>
            <a
              className={`dropdown-item ${lang.code === language.language ? 'disabled' : ''}`}
              href="#"
              onClick={() => handleLanguageChange(lang.code)}
            >
              {lang.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;
