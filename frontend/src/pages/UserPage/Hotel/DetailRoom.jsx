import React from "react";

import roomImage1 from "../../../assets/img/HOTEL/detail room 2.jpg";
import roomImage2 from "../../../assets/img/HOTEL/detail room 4.jpg";
import roomImage3 from "../../../assets/img/HOTEL/detail room 3.jpg";
import "../../../styles/detail-room.css";
import Navbar from "../../../components/User/Navbar";
import Footer from "../../../components/User/Footer";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="hero-roooom">
    <div className="hero-text">
      <h1>ROOM DETAILS</h1>
    </div>
  </section>
);

const MainContent = () => (
  <main>
    <div className="content-wrapper">
      {/* Room Images */}
      <div className="room-images">
        <img src={roomImage1} alt="Room 1" />
        <img src={roomImage2} alt="Room 2" />
        <img src={roomImage3} alt="Room 3" />
      </div>

      {/* Sidebar */}
      <aside className="sidebar" style={{ width: "500px", padding: "10px" }}>
        <h2>Book A Room</h2>
        <label>
          Check-in <input type="text" className="form-control" />
        </label>
        <label>
          Check-out <input type="date" className="form-control" />
        </label>
        <label>
          Room <input type="number" min="1" className="form-control" defaultValue="1" />
        </label>
        <label>
          Guest <input type="number" min="1" className="form-control" defaultValue="1" />
        </label>
        <Link className="btn book-now-btn w-100" to={`/hotel/detail-hotel-payment`}>
          Book Now
        </Link>
      </aside>
    </div>
  </main>
);

const RoomInfo = () => (
  <section className="room-info">
    <div className="room-header">
      <h2>Executive Suite</h2>
      <p className="price">5,782,000 IDR / Night</p>
    </div>

    <div className="room-description">
      <h3>Room Description</h3>
      <p>
        Experience the executive treatment in one of our superbly appointed Executive Suites. Our 105-square meter Executive Suites offer city or swimming pool views. The elegant bedroom area is equipped with a living room with cozy arm
        chairs and a tea table. The room is completed with exclusive benefits including continental breakfast daily, daily refreshments, VIP express check-in, and use of the business center facility at The Executive Lounge. In addition to
        complimentary food and beverage from the mini bar, guests staying in the Executive Suite have the benefit to brew coffee from the pod coffee machine.
      </p>
      <div className="room-details">
        <div className="detail-item">
          <i className="fas fa-user"></i> Max Guest: 4
        </div>
        <div className="detail-item">
          <i className="fas fa-paw"></i> Pet: No
        </div>
        <div className="detail-item">
          <i className="fas fa-smoking-ban"></i> Smoking: No
        </div>
        <div className="detail-item">
          <i className="fas fa-ban"></i> Drug: No
        </div>
      </div>

      <div className="room-features">
        <h3>Room Features</h3>
        <div className="features-grid">
          {[
            { icon: "fas fa-swimmer", label: "Swimming Pool" },
            { icon: "fas fa-wifi", label: "Wifi" },
            { icon: "fas fa-utensils", label: "Breakfast" },
            { icon: "fas fa-dumbbell", label: "Gym" },
            { icon: "fas fa-gamepad", label: "Game Center" },
            { icon: "fas fa-lightbulb", label: "24/7 Light" },
            { icon: "fas fa-tshirt", label: "Laundry" },
            { icon: "fas fa-parking", label: "Parking Space" },
          ].map((feature, index) => (
            <div className="feature-item" key={index}>
              <i className={feature.icon}></i> {feature.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const DetailRoom = () => (
  <>
    <Navbar />
    <Hero />
    <MainContent />
    <RoomInfo />
    <Footer />
  </>
);

export default DetailRoom;
