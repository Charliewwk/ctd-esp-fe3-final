import SocialIcon from "../social/SocialIcon"
import "./footer.css"

const Footer = () => {
  return (
    <>

      <footer className="footer">
        <div className="container">
          <div className="left-content">
            <span className="text-muted">Powered by</span>
            {/* <p>{translations.poweredBy}</p> */}
            <img src="/src/assets/DH.png" alt="DH-logo" />
          </div>
          <div className="right-content">
            <p>Christian Fernández</p>
            <SocialIcon src="/src/assets/ico-facebook.png" alt="Facebook" />
            <SocialIcon src="/src/assets/ico-instagram.png" alt="Instagram" />
            <SocialIcon src="/src/assets/ico-tiktok.png" alt="Tiktok" />
            <SocialIcon src="/src/assets/ico-whatsapp.png" alt="Whatsapp" />
          </div>    
        </div>    
      </footer>
    
    </>
  )
}

export default Footer;