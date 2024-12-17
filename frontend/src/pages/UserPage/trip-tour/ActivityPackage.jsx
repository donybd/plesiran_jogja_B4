import { Link } from "react-router-dom";
import Footer from "../../../components/User/Footer";
import Navbar from "../../../components/User/Navbar";

const ActivityPackage = () => {
  return (
    <>
      <Navbar />
      <div className="hero-det-tour">
        <h1>Prambanan Temple</h1>
        <div className="hero-det-overlay"></div>
      </div>

      <div className="content">
        <div className="accordion">
          <div className="accordion-item">
            <div className="package">
              <h2>
                Activity Package
                <hr />
              </h2>
              <ul>
                <li>Prambanan Temple</li>
                <li>Other Sites</li>
                <li>Ratu Boko</li>
                <li>Malioboro</li>
              </ul>
              <Link to={`/trip-tour/tour-date`} className="next-button shadow">
                Next
              </Link>
            </div>
          </div>
          <div className="accordion-item">
            <button>Date &amp; Time</button>
          </div>
          <div className="accordion-item">
            <button>Numbers Of Guest</button>
          </div>
          <div className="accordion-item">
            <button>Additional Information</button>
          </div>
          <div className="accordion-item">
            <button>Payment</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ActivityPackage;
