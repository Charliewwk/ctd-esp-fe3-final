import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGlobal } from "../../context/GlobalContext";
import ThemeSwitch from "../themeSwitch/ThemeSwitch";
import LanguageSelector from "../languageSelector/LanguageSelector";

const Header = () => {
  const location = useLocation();
  const { theme, language, languageDispatch, translations } = useGlobal();
  const navbarCollapseRef = useRef(null);

  const handleLanguageChange = (selectedLanguage) => {
    languageDispatch({ type: "TOGGLE_LANGUAGE", payload: selectedLanguage });
  };

  const closeNavbar = () => {
    if (navbarCollapseRef.current) {
      navbarCollapseRef.current.classList.remove("show");
    }
  };

  useEffect(() => {
    closeNavbar();
  }, [language.language, theme.darkMode]);

  const navLink = (to, label) => (
    <li className="nav-item">
      <Link
        className={`nav-link ${location.pathname === to ? "active" : ""}`}
        to={to}
        onClick={closeNavbar}
      >
        {label}
      </Link>
    </li>
  );

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
        <div
          ref={navbarCollapseRef}
          className="collapse navbar-collapse show"
          id="navbarCollapse"
        >
          <ul className="navbar-nav me-auto">
            {navLink("/", translations.home)}
            {navLink("/favorites", translations.favorites)}
            {navLink("/contact", translations.contact)}
            {navLink("/about", translations.about)}
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
