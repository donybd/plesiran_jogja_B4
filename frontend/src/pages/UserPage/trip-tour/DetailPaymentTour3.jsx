import Navbar from "../../../components/User/Navbar";
import Footer from "../../../components/User/Footer";
import ProgressBar from "../../../components/User/ProgressBar";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Ambil data dari state atau fallback ke navigasi ulang jika data tidak ditemukan
  const { tourData, name_tour, price = 0, duration, destination, facility } = location.state || {};
  if (!tourData || !name_tour || !price || !duration || !destination || !facility) {
    navigate("/trip-tour/detail-payment-tour-2", { replace: true });
    return null;
  }

  const VAT = price * 0.12; // 12% VAT
  const serviceCharge = price * 0.1; // 10% Service Charge
  const finalTotal = price + VAT + serviceCharge;

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
            <h3>{price.toLocaleString("id-ID")} IDR</h3>
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
            to={`/trip-tour/detail-last-payment`}
            state={{
              tourData,
              name_tour,
              price,
              duration,
              destination,
              facility,
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

const DetailPaymentTour3 = () => {
  return (
    <>
      <Navbar />
      <BannerTrip />
      <ProgressBar />
      <Accordian />
      <Payment />
      <Footer />
    </>
  );
};

export default DetailPaymentTour3;
