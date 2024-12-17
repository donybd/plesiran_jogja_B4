import Navbar from "../../../components/User/Navbar";
import Footer from "../../../components/User/Footer";
import ProgressBar from "../../../components/User/ProgressBar";
import { Link, useLocation, useNavigate } from "react-router-dom";

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

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Ambil data dari state atau fallback ke navigasi ulang jika data tidak ditemukan
  const { vehicleData, startDate, endDate, totalPrice = 0 } = location.state || {};
  if (!vehicleData || !startDate || !endDate || !totalPrice) {
    navigate("/rental/rent-booking-2", { replace: true });
    return null;
  }

  const VAT = totalPrice * 0.12; // 12% VAT
  const serviceCharge = totalPrice * 0.1; // 10% Service Charge
  const finalTotal = totalPrice + VAT + serviceCharge;

  return (
    <div className="payment-section">
      <div className="payment-header">
        <span className="number">3.</span>
        <h2>Payment</h2>
      </div>

      <div className="total-section">
        {/* Menampilkan rincian pembayaran */}
        <div className="total-row">
          <div className="total-label">
            <h3>Total</h3>
          </div>
          <div className="total-amount">
            <h3>{totalPrice.toLocaleString("id-ID")} IDR</h3>
          </div>
        </div>
        <div className="total-row">
          <div className="total-label">
            <p>Not included: VAT / Consumption tax 12%</p>
          </div>
          <div className="total-amount">
            <p>{VAT.toLocaleString("id-ID")} IDR</p>
          </div>
        </div>
        <div className="total-row">
          <div className="total-label">
            <p>Not included: Service Charge 10%</p>
          </div>
          <div className="total-amount">
            <p>{serviceCharge.toLocaleString("id-ID")} IDR</p>
          </div>
        </div>
        <div className="total-row">
          <div className="total-label">
            <p>The total amount is:</p>
          </div>
          <div className="total-amount">
            <h3>{finalTotal.toLocaleString("id-ID")} IDR</h3>
          </div>
        </div>

        <div className="button-container">
          <Link
            className="btn pay-now"
            to={`/rental/detail-payment-last`}
            state={{
              vehicleData,
              totalPrice,
              startDate,
              endDate,
              finalTotal,
              VAT,
              serviceCharge,
            }}
            style={{ textDecoration: "none" }}
          >
            Pay Now
          </Link>
        </div>
      </div>
    </div>
  );
};

const Accordian = () => {
  return (
    <div className="accordion">
      <div className="accordion-item">
        <button className="accordion-header">
          <span className="number">1.</span>
          <span className="title">Detail Reservation</span>
        </button>
      </div>
      <div className="accordion-item">
        <button className="accordion-header">
          <span className="number">2.</span>
          <span className="title">Personal Data</span>
        </button>
      </div>
    </div>
  );
};

const DetailPaymentRent3 = () => {
  return (
    <>
      <Navbar />
      <BannerRent />
      <ProgressBar />
      <Accordian />
      <Payment />
      <Footer />
    </>
  );
};

export default DetailPaymentRent3;
