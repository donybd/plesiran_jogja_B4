import React from "react";
import { Link, useLocation } from "react-router-dom";
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

const ReservationDetail = ({ tourData, name_tour, price, duration, destination, facility }) => {
  return (
    <div className="reservation-detail">
      <div className="detail-header">
        <span className="number">1.</span>
        <h2>Detail Reservation</h2>
        <span className="price">Price: Rp {tourData.price.toLocaleString("id-ID")}</span>
      </div>
      <div className="detail-body">
        <h3>{tourData.name_tour}</h3>
        <ul>{tourData.duration && <li>Duration: {tourData.duration}</li>}</ul>
        <ul>{tourData.destination && <li>Destination: {tourData.destination}</li>}</ul>
        <ul>{tourData.facility && <li>Facility: {tourData.facility}</li>}</ul>
      </div>
      <Link className="next-button" to="/trip-tour/detail-payment-tour-2" state={{ tourData, name_tour, price, duration, destination, facility }} style={{ textDecoration: "none" }}>
        Next
      </Link>
    </div>
  );
};

const Accordian = () => {
  return (
    <div className="accordion">
      <div className="accordion-item">
        <button className="accordion-header">
          <span className="number">2.</span>
          <span className="title">Personal Data</span>
        </button>
      </div>
      <div className="accordion-item">
        <button className="accordion-header">
          <span className="number">3.</span>
          <span className="title">Payment</span>
        </button>
      </div>
    </div>
  );
};

const DetailPaymentTour = () => {
  const location = useLocation();
  const { tourData, name_tour, price, duration, destination, facility } = location.state || {}; // Default to empty object if no data is found

  if (!tourData) {
    return <h1>Tour data not found.</h1>;
  }

  return (
    <>
      <Navbar />
      <BannerTrip />
      <ProgressBar />
      <ReservationDetail tourData={tourData} name_tour={name_tour} price={price} duration={duration} destination={destination} facility={facility} />
      <Accordian />
      <Footer />
    </>
  );
};

export default DetailPaymentTour;
