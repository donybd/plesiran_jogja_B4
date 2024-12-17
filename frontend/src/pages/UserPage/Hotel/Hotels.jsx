import React, { useState, useEffect } from "react";
import Navbar from "../../../components/User/Navbar";
import Footer from "../../../components/User/Footer";
import "../../../styles/hotel.css";
import { Link } from "react-router-dom";

const Hotels = () => {
  const URL = import.meta.env.VITE_BE_API; // URL untuk API backend
  const [hotels, setHotels] = useState([]); // Set initial state as an empty array
  const [loading, setLoading] = useState(false); // State for loading
  const [selectedRatings, setSelectedRatings] = useState([]); // State for filter rating
  const [sortBy, setSortBy] = useState("Most Popular"); // State for sorting choice

  useEffect(() => {
    async function fetchHotels() {
      try {
        setLoading(true); // Set loading to true when starting the request
        const response = await fetch(URL + "hotel/htl");
        const result = await response.json();
        setHotels(result.data || []); // Set data, default to empty array if undefined
      } catch (error) {
        console.log("Something went wrong");
        console.log(error);
      } finally {
        setLoading(false); // Set loading to false after the request is completed
      }
    }

    fetchHotels(); // Call fetchHotels when the component first renders
  }, [URL]);

  // Function to handle rating checkbox change
  const handleRatingChange = (rating) => {
    setSelectedRatings((prevRatings) => (prevRatings.includes(rating) ? prevRatings.filter((r) => r !== rating) : [...prevRatings, rating]));
  };

  // Function to handle sorting change
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  // Function to filter hotels based on selected ratings
  const filteredHotels = hotels.filter((hotel) => {
    const matchesRating = selectedRatings.length === 0 || selectedRatings.includes(Math.round(hotel.rating));
    return matchesRating;
  });

  // Function to sort hotels based on the selected sorting method
  const sortedHotels = () => {
    if (sortBy === "Most Popular") {
      return filteredHotels;
    } else if (sortBy === "Guest Rating") {
      return filteredHotels.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "Name") {
      return filteredHotels.sort((a, b) => a.name_hotel.localeCompare(b.name_hotel));
    }
    return filteredHotels;
  };

  // Show loading if data is not yet received
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Navbar />
      <main>
        <div className="sidebarhtl col-4 mb-2 p-4" style={{ marginTop: "150px", backgroundColor: "##f4efe6", borderRadius: "0px" }}>
          <h3>Stars Rating</h3>
          <div className="stars">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label key={rating}>
                <input type="checkbox" checked={selectedRatings.includes(rating)} onChange={() => handleRatingChange(rating)} />
                {" ★".repeat(rating)}
              </label>
            ))}
          </div>
        </div>

        <div className="hotel-listings col-8" style={{ marginTop: "130px" }}>
          <div className="row listtthotel">
            <div className="sort-options">
              <label>Sort By:</label>
              <select className="form-control w-25" value={sortBy} onChange={handleSortChange}>
                <option>Most Popular</option>
                <option>Guest Rating</option>
                <option>Name</option>
              </select>
            </div>

            <div className="hotels mt-4">
              {sortedHotels().map((hotel, index) => (
                <div className="col-12 col-md-12 col-lg-12" key={index}>
                  <div className="hotel-card" style={{ borderRadius: "0px", border: "1px solid #D9D9D9" }}>
                    <img src={`../../../img/HOTEL/${hotel.hotel_image}`} className="img-fluid w-100" alt={hotel.name_hotel} style={{ borderRadius: "0px" }} />
                    <Link to={`/hotel/detail-hotel/${hotel.id}`} className="hotel-link">
                      <h3>{hotel.name_hotel}</h3>
                    </Link>
                    <p>{hotel.address}</p>
                    <div className="star-rating">{`★`.repeat(Math.round(hotel.rating))}</div>
                    <p>{hotel.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Hotels;
