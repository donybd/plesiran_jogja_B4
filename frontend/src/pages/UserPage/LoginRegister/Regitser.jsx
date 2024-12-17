import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import "../../../styles/login.css";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  // Handle registration form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() || !name.trim() || !password.trim() || !confPassword.trim()) {
      setMsg("All fields must be filled.");
      return;
    }

    // Periksa apakah checkbox "Ingat Saya" telah dicentang
    const rememberMeChecked = document.getElementById("rememberMeCheckbox").checked;
    if (!rememberMeChecked) {
      setMsg("You must check 'Remember Me' to register.");
      return;
    }

    // Periksa apakah password dan konfirmasi password sama
    if (password !== confPassword) {
      setMsg("Password and password confirmation do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4008/auth/users",
        {
          email: email,
          name: name, // Kirim nama di sini
          password: password,
          confPassword: confPassword,
        },
        {
          withCredentials: true,
        }
      );
      console.log("Register response:", response.data); // Debug respons

      // Save user data to localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: email,
          name: name,
        })
      );

      console.log("Register response:", response.data);
      setPopupMessage("Registration successful! Please login.");
      setShowPopup(true);
      setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      console.error("Register error:", error);
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="login-page">
      <div className="hero-login">
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-md-4 text-center text-md-start mb-0 mb-md-0">
              <img src={logo} alt="Logo" className="logo-login" />
            </div>
            <div className="col-12 col-md-4 col-lg-6">
              <div className="form-login bg-white p-4 p-md-5 rounded-4 shadow-lg">
                <h2 className="login-text text-center mb-0">Please Register</h2>
                <div className="login-switch bg-secondary rounded-5 d-flex justify-content-center align-items-center mb-3">
                  <Link className="btn btn-register" to={`/login`}>
                    Login
                  </Link>
                  <Link className="btn btn-login active box-shadow-lg" to="/register">
                    Register
                  </Link>
                </div>
                <p className="login-txt-1 text-center mb-0">Enter Personal Details & Start Journey With Us</p>
                {msg && <div className="alert alert-danger">{msg}</div>}
                <form id="registerForm" onSubmit={handleSubmit}>
                  <div className="login-text4">
                    <label htmlFor="email" className="form-label mb-0">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control-login mb-0"
                      id="email"
                      placeholder="Enter your Email Address"
                      value={email}
                      onChange={({ target }) => setEmail(target.value)}
                      style={{
                        fontSize: "12px",
                        color: "#acacac",
                        fontWeight: "300",
                      }}
                    />
                  </div>
                  <div className="login-text4 mb-0">
                    <label htmlFor="username" className="form-label mb-0 mt-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control-login mb-0"
                      id="username"
                      placeholder="Enter your Full Name"
                      value={name}
                      onChange={({ target }) => setName(target.value)}
                      style={{
                        fontSize: "12px",
                        color: "#acacac",
                        fontWeight: "300",
                      }}
                    />
                  </div>
                  <div className="position-relative">
                    <label htmlFor="password" className="form-label d-block mb-0">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control-login w-100"
                      id="password"
                      placeholder="Enter your Password"
                      value={password}
                      onChange={({ target }) => setPassword(target.value)}
                      style={{
                        fontSize: "12px",
                        color: "#acacac",
                        fontWeight: "300",
                      }}
                    />
                    <i className="las la-eye-slash position-absolute password-toggle-icon"></i>
                  </div>
                  <div className="position-relative">
                    <label htmlFor="confPassword" className="form-label d-block mb-0">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control-login w-100"
                      id="confPassword"
                      placeholder="Confirm your Password"
                      value={confPassword}
                      onChange={({ target }) => setConfPassword(target.value)}
                      style={{
                        fontSize: "12px",
                        color: "#acacac",
                        fontWeight: "300",
                      }}
                    />
                  </div>
                  <div className="d-flex justify-content-between mb-0">
                    <div>
                      <input type="checkbox" id="rememberMeCheckbox" />
                      <label className="text-decoration-none mb-0" htmlFor="rememberMeCheckbox">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn-submit mb-0 mt-0">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup when registration is successful */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-message">
            <p>{popupMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
