import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useGlobal } from "../../context/GlobalContext";
import ThemeSwitch from "../themeSwitch/ThemeSwitch";
import "./header.css";

const Header = () => {
  const location = useLocation();
  const { theme } = useGlobal();

  return (
    
    <nav className={`navbar fixed-top navbar-expand-md ${theme.darkMode ? 'bg-dark' : 'bg-light'}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">Diga Ahhh!</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/favorites' ? 'active' : ''}`} to="/favorites">Favorites</Link>
            </li>
          </ul>
          <ul className="theme-icon navbar-nav mb-2 mb-md-0 m-2">
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
