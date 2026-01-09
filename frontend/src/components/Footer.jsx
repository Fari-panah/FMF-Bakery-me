import { Link } from "react-router-dom";
import logo from "../assets/Images/bakerylogo.png";
import "./Footer.css";
const Footer = () => {
    return (
      <footer className="footer">
        {/* Top section with logo & social icons */}
        <div className="footer-top">
          <img src={logo} alt="Bakery Logo" className="footer-logo" />
          <div className="social-icons">
            <p>Follow us</p>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="fab fa-whatsapp"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
  
        {/* Thin separator line */}
        <div className="footer-line"></div>
  
        {/* Main Footer Content */}
        <div className="footer-container">
          <div className="footer-section">
            <h3>Contact us</h3>
            <p>(358) 789-12301</p>
            <p>info@bakery.co.uk</p>
            <p>South 13th Street</p>
            <p>Tampere, Finland</p>
          </div>
  
          <div className="footer-section">
            <h3>Explore</h3>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Services</a></li>
            </ul>
          </div>
  
          <div className="footer-section">
            <h3>Find Store</h3>
            <ul>
            <li><a href="/">Career</a></li>
            <li><Link to="/user">My Account</Link></li>
            <li><a href="/">Order Online</a></li>
            </ul>
          </div>
        </div>
  
        <p className="footer-bottom-text">
          © 2024 Bake House. All rights reserved
        </p>
      </footer>
    );
  };
  export default Footer;