import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
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
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favorites">Favorites</Link>
            </li>
          </ul>
          <ul className="d-flex navbar-nav mb-2 mb-md-0">
            <li className="marginTheme nav-item d-flex align-items-center">
              <img className="theme-icon" src="/src/assets/theme.svg" alt="Theme" />
              <form className="d-flex form-check form-switch ms-2 mb-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </form>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img className="language-icon" src="/src/assets/globe.svg" alt="Facebook" />
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="#">
                    English
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Spanish
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Portuguese
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
