import { Link } from "react-router-dom";
import "./footer.css"

const Footer = () => {
  return (
    <nav className="navFooter navbar fixed-bottom navbar-expand-sm navbar-light bg-light">
      <div className="container">
          <ul className="nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">Powered by</li>
            <Link className="nav-item" to="#"><img src="/src/assets/DH.png" alt="DH-logo" /></Link>
          </ul>
          <ul className="nav mb-2 mb-lg-0">
            <li className="nav-item">Christian Fernández</li>
            <Link className="nav-item" to="#"><img className="social-icon" src="/src/assets/facebook.svg" alt="Facebook" /></Link>
            <Link className="nav-item" to="#"><img className="social-icon" src="/src/assets/instagram.svg" alt="Instagram" /></Link>
            <Link className="nav-item" to="#"><img className="social-icon" src="/src/assets/tiktok.svg" alt="Tiktok" /></Link>
            <Link className="nav-item" to="#"><img className="social-icon" src="/src/assets/whatsapp.svg" alt="Whatsapp" /></Link>
          </ul>
        </div>
    </nav>
  )
}

export default Footer;