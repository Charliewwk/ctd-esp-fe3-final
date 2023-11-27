import { Link, useNavigate } from "react-router-dom";
import "./footer.css"

const Footer = () => {
  const handleBack = () => {
    navigate(-1); // Navegar hacia atrás en la pila de historial
  };

  const handleHome = () => {
    navigate("/"); // Navegar a la página de inicio
  };

  const handleForward = () => {
    navigate(1); // Navegar hacia adelante en la pila de historial
  };

  return (
/*     <nav className="navFooter navbar fixed-bottom navbar-expand-sm navbar-light bg-light">
      <div className="container">
          <ul className="nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">Powered by</li>
            <Link className="nav-item" to="#"><img src="/src/assets/DH.png" alt="DH-logo" /></Link>
          </ul>
          <div>

          </div>
          <ul className="nav mb-2 mb-lg-0">
            <li className="nav-item">Christian Fernández</li>
            <Link className="nav-item" to="#"><img className="social-icon" src="/src/assets/facebook.svg" alt="Facebook" /></Link>
            <Link className="nav-item" to="#"><img className="social-icon" src="/src/assets/instagram.svg" alt="Instagram" /></Link>
            <Link className="nav-item" to="#"><img className="social-icon" src="/src/assets/tiktok.svg" alt="Tiktok" /></Link>
            <Link className="nav-item" to="#"><img className="social-icon" src="/src/assets/whatsapp.svg" alt="Whatsapp" /></Link>
          </ul>
        </div>
    </nav> */
    <nav className="navFooter navbar fixed-bottom navbar-expand-sm navbar-light bg-light">
      <div className="container d-flex justify-content-center align-items-center">
        <button className="btn btn-light mx-2" onClick={handleBack}>
          &#8592; {/* Flecha a la izquierda */}
        </button>
        <button className="btn btn-light mx-2" onClick={handleHome}>
          🏠 {/* Icono de la casa */}
        </button>
        <button className="btn btn-light mx-2" onClick={handleForward}>
          &#8594; {/* Flecha a la derecha */}
        </button>
      </div>
    </nav>

    )
}

export default Footer;