import { Link, useNavigate } from "react-router-dom";
import { useGlobal } from "../../context/GlobalContext";
import "./footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const { theme, translations } = useGlobal();

  const goBack = () => {
    navigate(-1);
  };

  const goForward = () => {
    navigate(1);
  };

  return (
    <nav
      className={`navFooter navbar fixed-bottom navbar-expand-md ${
        theme.darkMode ? "bg-dark" : "bg-light"
      }`}
    >
      <div className="container">
        <div className="nav mb-2 mb-lg-0">
          <div className="nav-item">{translations.poweredBy}</div>
          <Link className="nav-item" to="#">
            <img
              className={`${theme.darkMode ? "invert-color" : ""}`}
              src="/src/assets/DH.png"
              alt="DH-logo"
            />
          </Link>
        </div>
        <div className="nav mb-2 mb-lg-0">
          <Link className="nav-item nav-icon" onClick={goBack}>
            <img
              className={`social-icon ${theme.darkMode ? "invert-color" : ""}`}
              src="/src/assets/arrow-left.svg"
              alt="Backward"
            />
          </Link>
          <div className="item-separator" />
          <Link className="nav-item nav-icon" to="/">
            <img
              className={`social-icon ${theme.darkMode ? "invert-color" : ""}`}
              src="/src/assets/house.svg"
              alt="Home"
            />
          </Link>
          <div className="item-separator" />
          <Link className="nav-item nav-icon" onClick={goForward}>
            <img
              className={`social-icon ${theme.darkMode ? "invert-color" : ""}`}
              src="/src/assets/arrow-right.svg"
              alt="Forward"
            />
          </Link>
        </div>
        <div className="nav mb-2 mb-lg-0">
          <div className="nav-item">Christian Fernández</div>
          <div className="item-separator" />
          <Link className="nav-item" to="#">
            <img
              className={`social-icon ${theme.darkMode ? "invert-color" : ""}`}
              src="/src/assets/facebook.svg"
              alt="Facebook"
            />
          </Link>
          <div className="item-separator" />
          <Link
            className={`social-icon ${theme.darkMode ? "invert-color" : ""}`}
            to="#"
          >
            <img
              className="social-icon"
              src="/src/assets/instagram.svg"
              alt="Instagram"
            />
          </Link>
          <div className="item-separator" />
          <Link
            className={`social-icon ${theme.darkMode ? "invert-color" : ""}`}
            to="#"
          >
            <img
              className="social-icon"
              src="/src/assets/tiktok.svg"
              alt="Tiktok"
            />
          </Link>
          <div className="item-separator" />
          <Link
            className={`social-icon ${theme.darkMode ? "invert-color" : ""}`}
            to="#"
          >
            <img
              className="social-icon"
              src="/src/assets/whatsapp.svg"
              alt="Whatsapp"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
