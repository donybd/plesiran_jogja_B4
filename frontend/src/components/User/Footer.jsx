import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import logo from "../../assets/img/logo2.png";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="text-center">
          <img src={logo} alt="Plesiran Jogja Logo" className="footer-logo" />
          <div className="mt-1">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link text-dark" to={`/discover`}>
                  Discovery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to={`/trip-tour`}>
                  Trip
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to={`/rent`}>
                  Rent
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to={`/about-us`}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to={`/contactus`}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <div className="contact-item">
              <i className="bi bi-envelope me-2"></i>
              plesiranjogja@gmail.com
            </div>
            <div className="contact-item">
              <i className="bi bi-telephone me-2"></i>
              0812345678
            </div>
            <div className="contact-item">
              <i className="bi bi-geo-alt me-2"></i>
              Sleman, Yogyakarta
            </div>
          </div>
          <div className="social-icons">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
          <div className="copyright">Copyright © Kel.4B 2024 - All rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
