import logo from "../../assets/img/logo.png";
import profile from "../../assets/img/profile.jpg";
import { FaArrowRightFromBracket, FaFileInvoice, FaUser } from "react-icons/fa6";
import "../../styles/navbar.css";
import { Link, useLocation } from "react-router-dom";
import BootstrapClient from "../BootstrapClient";

const Navbar = () => {
  const location = useLocation(); // Get the current location

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
      <BootstrapClient />
      <div className="container">
        <a className="navbar-brand me-auto" href="#">
          <img src={logo} alt="Logo" width="172" height="60" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas bg-dark offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <img src={logo} alt="Logo" width="172" height="60" />
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 ms-4">
              <li className="nav-item">
                <Link to="/homepage" className={`nav-link mx-lg-2 ${location.pathname === "/homepage" ? "active" : ""}`}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/discover" className={`nav-link mx-lg-2 ${location.pathname.startsWith("/discover") || location.pathname === "/discover/culinary" || location.pathname === "/discover/culture" ? "active" : ""}`}>
                  Discover
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/trip-tour" className={`nav-link mx-lg-2 ${location.pathname.startsWith("/trip-tour") ? "active" : ""}`}>
                  Trip&Tour
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/hotel" className={`nav-link mx-lg-2 ${location.pathname.startsWith("/hotel") ? "active" : ""}`}>
                  Hotel
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/rental" className={`nav-link mx-lg-2 ${location.pathname.startsWith("/rental") ? "active" : ""}`}>
                  Rental
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="dropdown">
          <a href="#" className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={profile} alt="Profile" className="profile-image" />
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownProfilButton">
            <li className="dropdown-item">
              <FaUser />
              <Link to="/profile">My Profile</Link>
            </li>
            <hr />
            <li className="dropdown-item">
              <FaFileInvoice />
              <Link to="/reservation">My Reservation</Link>
            </li>
            <hr />
            <li className="dropdown-item">
              <FaArrowRightFromBracket />
              <a href="/login">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
