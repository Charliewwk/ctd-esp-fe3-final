import React from "react";
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

  const footerLink = (icon, altText, onClick = () => {}, to = "#") => (
    <Link className="nav-item" to={to} onClick={onClick}>
      <img
        className={`social-icon ${theme.darkMode ? "invert-color" : ""}`}
        src={`/src/assets/${icon}`}
        alt={altText}
      />
    </Link>
  );

  return (
    <nav
      className={`navFooter navbar fixed-bottom navbar-expand-md ${
        theme.darkMode ? "bg-dark" : "bg-light"
      }`}
    >
      <div className="container">
        <div className="nav mb-2 mb-lg-0">
          <div className="nav-item">{translations.poweredBy}</div>
          {footerLink("DH.png", "DH-logo")}
        </div>
        <div className="nav mb-2 mb-lg-0">
          {footerLink("arrow-left.svg", "Backward", goBack)}
          <div className="item-separator" />
          {footerLink("house.svg", "Home", undefined, "/")}
          <div className="item-separator" />
          {footerLink("arrow-right.svg", "Forward", goForward)}
        </div>
        <div className="nav mb-2 mb-lg-0">
          <div className="nav-item">Christian Fernández</div>
          <div className="item-separator" />
          {footerLink("facebook.svg", "Facebook", undefined, "#")}
          <div className="item-separator" />
          {footerLink("instagram.svg", "Instagram", undefined, "#")}
          <div className="item-separator" />
          {footerLink("tiktok.svg", "Tiktok", undefined, "#")}
          <div className="item-separator" />
          {footerLink("whatsapp.svg", "Whatsapp", undefined, "#")}
        </div>
      </div>
    </nav>
  );
};

export default Footer;
