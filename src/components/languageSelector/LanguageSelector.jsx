import React from "react";
import { useGlobal } from "../../context/GlobalContext";

const LanguageSelector = ({ handleLanguageChange }) => {
  const { theme } = useGlobal();

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Spanish" },
    { code: "pt", label: "Portuguese" },
  ];

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
              className="dropdown-item"
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
