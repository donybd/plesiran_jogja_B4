import { FaHandBackFist, FaMoneyBill1Wave, FaPersonChalkboard } from "react-icons/fa6";
import large from "../../../assets/img/large-tripwus.png";
import small from "../../../assets/img/small-tripwus.png";
import { Link } from "react-router-dom";

const TravelTrip = () => {
  return (
    <section className="travel-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center">
            <div className="position-relative">
              <img src={large} className="large-image rounded-circle" alt="Prambanan" />
              <img src={small} className="small-image rounded-circle position-absolute" alt="Taman Sari" />
            </div>
          </div>
          <div className="col-lg-6">
            <h2 className="txt-choice mb-0 text-center">What Should Trip</h2>
            <h2 className="txt-pkg mt-0 text-center">With Us?</h2>
            <ul className="list-unstyled mx-5">
              <li className="d-flex align-items-start mb-4">
                <div className="icon-container me-3">
                  <FaPersonChalkboard size={24} />
                </div>
                <div>
                  <h5 className="txt-us">Professional Guide</h5>
                  <p className="txt-us2">Experienced and friendly guides make your holiday safe and comfortable.</p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4">
                <div className="icon-container me-3">
                  <FaMoneyBill1Wave size={24} />
                </div>
                <div>
                  <h5 className="txt-us">An Affordable Price</h5>
                  <p className="txt-us2">Enjoy quality travel experiences without breaking the bank.</p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4">
                <div className="icon-container me-3">
                  <FaHandBackFist size={24} />
                </div>
                <div>
                  <h5 className="txt-us">Easy Booking</h5>
                  <p className="txt-us2">Book your trip in just a few clicks, hassle-free.</p>
                </div>
              </li>
            </ul>
            <Link className="btn btn-about-us mt-3 justify-content-center" to={`/about-us`}>
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelTrip;
