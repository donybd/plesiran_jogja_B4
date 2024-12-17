import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../../../components/User/Footer";
import Navbar from "../../../components/User/Navbar";
import ProgressBar from "../../../components/User/ProgressBar";

const BannerTrip = () => {
  return (
    <section className="hero-det-tour">
      <div className="hero-det-overlay"></div>
      <div className="hero-text">
        <h1>TRIP INFORMATION</h1>
        <p>
          <i className="fas fa-info-circle"></i> Payment Information
        </p>
      </div>
    </section>
  );
};

const PersonalData = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { tourData, name_tour, price, duration, destination, facility } = location.state || {}; // Retrieve passed state

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = (e) => {
    e.preventDefault(); // Prevent default form submission

    const { name, email, phone } = formData;

    if (!name || !email || !phone) {
      alert("Please fill out all the required fields.");
      return;
    }

    // Navigate to the next page if validation passes
    navigate("/trip-tour/detail-payment-tour-3", {
      state: { tourData, name_tour, price, duration, destination, facility },
    });
  };

  if (!tourData) {
    return <h1>Data not found.</h1>;
  }
  return (
    <div className="personal-data">
      <div className="data-header">
        <span className="number">2.</span>
        <h2>Personal Data</h2>
      </div>
      <div className="data-body">
        <form onSubmit={handleNext}>
          <label htmlFor="name">Full Name :</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />

          <label htmlFor="email">Email Address :</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />

          <label htmlFor="phone">Phone Number :</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />

          <button className="next-button" type="submit" style={{ textDecoration: "none" }}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

const Accordian = () => {
  const location = useLocation();
  const { tourData, name_tour, price, duration, destination, facility } = location.state || {};

  return (
    <>
      <div className="accordion">
        <div className="accordion-item">
          <button className="accordion-header">
            <span className="number">1.</span>
            <span className="title">Detail Reservation</span>
            {/* <i className="fas fa-caret-down"></i> */}
          </button>
        </div>
      </div>
      <PersonalData />
      <div className="accordion">
        <div className="accordion-item">
          <button className="accordion-header">
            <span className="number">3.</span>
            <span className="title">Payment</span>
            {/* <i className="fas fa-caret-down"></i> */}
          </button>
        </div>
      </div>
    </>
  );
};

const DetailPaymentTour2 = () => {
  const location = useLocation();
  const { tourData, name_tour, price, duration, destination, facility } = location.state || {};

  if (!tourData) {
    return <h1>Tour data not found.</h1>;
  }

  return (
    <>
      <Navbar />
      <BannerTrip />
      <ProgressBar />
      <Accordian />
      <Footer />
    </>
  );
};
export default DetailPaymentTour2;
