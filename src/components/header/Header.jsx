import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useGlobal } from "../../context/GlobalContext";
import ThemeSwitch from "../themeSwitch/ThemeSwitch";
import LanguageSelector from "../languageSelector/LanguageSelector";

const Header = () => {
  const location = useLocation();
  const { theme, language, languageDispatch, translations } = useGlobal();

  const handleLanguageChange = (selectedLanguage) => {
    languageDispatch({ type: "TOGGLE_LANGUAGE", payload: selectedLanguage });
  };

  return (
    <nav
      className={`navbar fixed-top navbar-expand-md ${
        theme.darkMode ? "bg-dark" : "bg-light"
      }`}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          Diga Ahhh!
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                to="/"
              >
                {translations.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/favorites" ? "active" : ""
                }`}
                to="/favorites"
              >
                {translations.favorites}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
                to="/contact"
              >
                {translations.contact}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                {translations.about}
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <LanguageSelector handleLanguageChange={handleLanguageChange} />
            </li>
            <div className="item-separator" />
            <li className="nav-item">
              <ThemeSwitch />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
