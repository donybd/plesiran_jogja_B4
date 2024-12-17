import { useLocation } from "react-router-dom";
import Navbar from "../../../components/User/Navbar";
import Footer from "../../../components/User/Footer";
import ProgressBar from "../../../components/User/ProgressBar";
import { Link } from "react-router-dom";

// Banner component
const BannerRent = () => {
  return (
    <section className="hero-rent-payment">
      <div className="hero-text">
        <h1>RENT INFORMATION</h1>
        <p>
          <i className="fas fa-info-circle"></i> Payment Information
        </p>
      </div>
    </section>
  );
};

// Reservation Detail component - dynamically populated
const ReservationDetail = ({ vehicleData, startDate, endDate, totalPrice }) => {
  // Format the dates for better readability
  const formattedStartDate = new Date(startDate).toLocaleDateString();
  const formattedEndDate = new Date(endDate).toLocaleDateString();

  return (
    <div className="reservation-detail">
      <div className="detail-header">
        <span className="number">1.</span>
        <h2>Detail Reservation</h2>
        <span className="price">{totalPrice.toLocaleString()} IDR</span>
      </div>
      <div className="detail-body">
        <h3>{vehicleData.name}</h3>
        <p>
          Date Reservation: {formattedStartDate} to {formattedEndDate}
        </p>
        <p>Check-in from: {formattedStartDate}</p>
        <p>Check-in before: {formattedEndDate}</p>

        <h2 className="titledetailrent">Vehicle Detail</h2>
        <p>Nama: {vehicleData.title}</p>
        <p>Seats: {vehicleData.capacity} people</p>
        <p>Fuel: {vehicleData.fuel}</p>
        <p>Transmission: {vehicleData.transmission}</p>
      </div>
      <Link className="next-button" to="/rental/rent-booking-2" state={{ vehicleData, startDate, endDate, totalPrice }} style={{ textDecoration: "none" }}>
        Next
      </Link>
    </div>
  );
};

// Accordion component (no changes needed)
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

// Main component (DetailPaymentRent2)
const DetailPaymentRent = () => {
  // Retrieve the data passed via React Router
  const location = useLocation();
  const { vehicleData, startDate, endDate, totalPrice } = location.state || {}; // Default to empty object if no data is found

  if (!vehicleData) {
    return <h1>Vehicle data not found.</h1>;
  }

  return (
    <>
      <Navbar />
      <BannerRent />
      <ProgressBar />
      <ReservationDetail vehicleData={vehicleData} startDate={startDate} endDate={endDate} totalPrice={totalPrice} />
      <Accordian />
      <Footer />
    </>
  );
};

export default DetailPaymentRent;
