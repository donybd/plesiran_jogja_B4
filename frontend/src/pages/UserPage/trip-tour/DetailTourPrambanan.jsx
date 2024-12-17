import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../../components/User/Navbar";
import Footer from "../../../components/User/Footer";
import "../../../styles/detail-tour/detail-tour.css";

const DetailTourPrambanan = () => {
  const { id } = useParams(); // Get the id from URL params
  const navigate = useNavigate(); // For navigation to booking page
  const API_URL = import.meta.env.VITE_BE_API;

  const [tourData, setTourData] = useState(null); // Store tour detail data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch the tour detail
  useEffect(() => {
    async function fetchTourDetails() {
      if (!id) {
        setError("Tour ID is invalid.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(`${API_URL}tour/list${id}`); // Correct API URL
        if (!response.ok) throw new Error("Failed to load tour data.");

        const result = await response.json();
        setTourData(result.data);
      } catch (err) {
        setError("Failed to fetch tour data.");
      } finally {
        setLoading(false);
      }
    }

    fetchTourDetails();
  }, [id]);

  const { name_tour, price, duration, destination, facility } = tourData || {};
  // Handle booking button click
  const handleBookingClick = () => {
    navigate("/trip-tour/detail-payment-tour", { state: { tourData, name_tour, price, duration, destination, facility } });
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="hero-det-tour">
          <h1>Loading...</h1>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="hero-det-tour">
          <h1>{error}</h1>
        </div>
        <Footer />
      </>
    );
  }

  return tourData ? (
    <>
      <Navbar />
      <div className="hero-det-tour">
        <h1>{tourData.name_tour}</h1>
        <div className="hero-det-overlay"></div>
      </div>

      <section>
        <div className="content">
          <div className="txt-content justify-content-center">
            <h2>History</h2>
            <p>{tourData.history}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="des-tour">
          <div className="txt-content">
            <h2>Tour Description - {tourData.duration}</h2>
            <ol>
              {tourData.day1_description.split("\n").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section>
        <div className="det-price">
          <div className="txt-content">
            <h2>Detailed Price</h2>
            <p>Rp {tourData.price.toLocaleString("id-ID")}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="fees-included">
          <div className="txt-content">
            <h2>Facility</h2>
            <ul>
              <li>{tourData.facility}</li>
              <li>Entrance fees</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Booking button */}
      <section className="booking-section">
        <div className="txt-content">
          <button className="btn-booking" onClick={handleBookingClick}>
            Booking Now
          </button>
        </div>
      </section>

      <Footer />
    </>
  ) : null;
};

export default DetailTourPrambanan;
