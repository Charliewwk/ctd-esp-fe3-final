import { Link, useNavigate } from "react-router-dom";
import "./footer.css"

const Footer = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navegar hacia atrás en el historial
  };

  const goHome = () => {
    navigate("/"); // Navegar a la página de inicio
  };

  const goForward = () => {
    navigate(1); // Navegar hacia adelante en el historial
  };


  return (
     <nav className="navFooter navbar fixed-bottom navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <ul className="nav mb-2 mb-lg-0">
          <li className="nav-item">Powered by</li>
          <Link className="nav-item" to="#"><img src="/src/assets/DH.png" alt="DH-logo" /></Link>
        </ul>
        <div>
          <button type="button" class="btn btn-outline-info" onClick={goBack}><img src="/src/assets/arrow-left.svg" alt="DH-logo" /></button>
          <button type="button" class="btn btn-outline-info" onClick={goForward}><img src="/src/assets/arrow-right.svg" alt="DH-logo" /></button>
        </div>
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