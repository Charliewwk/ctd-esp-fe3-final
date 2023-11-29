import React from "react";
import { useGlobal } from "../../context/GlobalContext";
import "./languageSelector.css"

const LanguageSelector = () => {
  const { theme, language, languageDispatch } = useGlobal();

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
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
          className="icon-flag"
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
              <img
                // className={`icon-flags ${lang.code === language.language ? 'disabled' : ''}`}
                className="icon-flags"
                src={`src/assets/${lang.code}.svg`}
                alt={lang.label}
              />
              {lang.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;
