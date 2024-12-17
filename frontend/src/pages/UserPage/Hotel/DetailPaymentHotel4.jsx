import Navbar from "../../../components/User/Navbar";
import Footer from "../../../components/User/Footer";
import ProgressBar from "../../../components/User/ProgressBar";
import BannerHotel from "./BannerHotel";

import BcaLogo from "../../../assets/img/HOTEL/bca logo.png";
import BniLogo from "../../../assets/img/HOTEL/bni logo.png";
import MandiriLogo from "../../../assets/img/HOTEL/mandiri logo.png";
import GopayLogo from "../../../assets/img/HOTEL/gopay logo.png";
import OvoLogo from "../../../assets/img/HOTEL/ovo logo.png";
import LinkAjaLogo from "../../../assets/img/HOTEL/link aja logo.png";
import ShopeePayLogo from "../../../assets/img/HOTEL/shopeepay logo.png";

import "../../../styles/hotel-payment-detail-4.css";
import { Link } from "react-router-dom";

const Accordian = () => {
  return (
    <div className="accordion">
      <div className="accordion-item">
        <button className="accordion-header">
          <span className="number">1.</span>
          <span className="title">Detail Reservation</span>
          {/* <i className="fas fa-caret-down"></i> */}
        </button>
      </div>
      <div className="accordion-item">
        <button className="accordion-header">
          <span className="number">2.</span>
          <span className="title">Personal Data</span>
          {/* <i className="fas fa-caret-down"></i> */}
        </button>
      </div>
    </div>
  );
};

const Payment = () => {
  return (
    <div className="payment-section">
      <div className="payment-header">
        <span className="number">3.</span>
        <h2>Payment</h2>
      </div>
      <div className="payment-body">
        <h3>Choose Payment Method</h3>
        <h4>Virtual Account</h4>
        <div className="payment-method">
          <label for="bca">
            <input type="radio" id="bca" name="payment" value="bca" />
            BCA Virtual Account
            <img src={BcaLogo} alt="BCA" />
          </label>

          <label for="bni">
            <input type="radio" id="bni" name="payment" value="bni" />
            BNI Virtual Account
            <img src={BniLogo} alt="BNI" />
          </label>

          <label for="mandiri">
            <input type="radio" id="mandiri" name="payment" value="mandiri" />
            Mandiri Virtual Account
            <img src={MandiriLogo} alt="Mandiri" />
          </label>

          <label for="other">
            <input type="radio" id="other" name="payment" value="other" />
            Other Bank
          </label>
        </div>

        <h4>Electronic Money</h4>
        <div className="payment-method">
          <label for="gopay">
            <input type="radio" id="gopay" name="payment" value="gopay" />
            Gopay
            <img src={GopayLogo} alt="GoPay" />
          </label>

          <label for="ovo">
            <input type="radio" id="ovo" name="payment" value="ovo" />
            OVO
            <img src={OvoLogo} alt="OVO" />
          </label>

          <label for="linkaja">
            <input type="radio" id="linkaja" name="payment" value="linkaja" />
            LinkAja
            <img src={LinkAjaLogo} alt="LinkAja" />
          </label>

          <label for="shopeepay">
            <input type="radio" id="shopeepay" name="payment" value="shopeepay" />
            ShopeePay
            <img src={ShopeePayLogo} alt="ShopeePay" />
          </label>
        </div>
      </div>

      <div className="total-section">
        <div className="total-row">
          <div className="total-label">
            <h3>Total</h3>
          </div>
          <div className="total-amount">
            <h3>5.782.000 IDR</h3>
          </div>
        </div>

        <div className="total-row">
          <div className="total-label">
            <p>Not included: VAT / Consumption tax 12%</p>
          </div>
          <div className="total-amount">
            <p>687.360 IDR</p>
          </div>
        </div>

        <div className="total-row">
          <div className="total-label">
            <p>Not included: Service Charge 10%</p>
          </div>
          <div className="total-amount">
            <p>578.200 IDR</p>
          </div>
        </div>

        <div className="total-row">
          <div className="total-label">
            <p>The total amount is:</p>
          </div>
          <div className="total-amount">
            <h3>7.047.560 IDR</h3>
          </div>
        </div>

        <div className="button-container">
          <Link className="btn pay-now" to={`/hotel/detail-payment-last`}>
            Pay Now
          </Link>
        </div>
      </div>
    </div>
  );
};

const DetailPaymentHotel4 = () => {
  return (
    <>
      <Navbar />
      <BannerHotel />
      <ProgressBar />
      <Accordian />
      <Payment />
      <Footer />
    </>
  );
};

export default DetailPaymentHotel4;
