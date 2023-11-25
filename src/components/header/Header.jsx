import { Link } from "react-router-dom";
import { useGlobal } from "../../context/GlobalContext";
import LanguageSelector from "../languageSelector/LanguageSelector";
import ThemeSwitch from "../themeSwitch/ThemeSwitch";
import "./header.css";
import translations from "../../locales"

const Header = () => {
  const { state } = useGlobal();

  return (
    <nav className="navbar navbar-expand-md fixed-top navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Diga Ahhh!</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">{translations.home}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">{translations.contact}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favorites">{translations.favorites}</Link>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-md-0 m-2">
            <li className="nav-item">
              <ThemeSwitch />
            </li>
            <li className="nav-item">
              <LanguageSelector />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
