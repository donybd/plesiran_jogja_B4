import { useState, useEffect } from "react";
import styles from "./Hotel.module.css";
import { useNavigate } from "react-router-dom";

// Hotel images
import hotelTentrem from "../../../assets/img/HOTEL/hotel-tentrem-yogyakarta.jpg";
import artotelSuites from "../../../assets/img/HOTEL/artotel-suites-bianti.jpg";
import elHotel from "../../../assets/img/HOTEL/el hotel yogyakarta.jpg";
import oneOOneStyle from "../../../assets/img/HOTEL/facade-1o1-style-yogyakarta.jpg";
import gaiaCosmo from "../../../assets/img/HOTEL/gaia-cosmo-hotel.jpg";
import avetaHotel from "../../../assets/img/HOTEL/our-hotel-is-located.jpg";
import neoMalioboro from "../../../assets/img/HOTEL/hotel-neo-malioboro.jpg";
import ibisStyles from "../../../assets/img/HOTEL/exterior-view.jpg";
import faveHotel from "../../../assets/img/HOTEL/favehotel-malioboro-yogyakarta.jpg";
import zestHotel from "../../../assets/img/HOTEL/zest-hotel-yogyakarta.jpg";
import kottaGo from "../../../assets/img/HOTEL/kotta go yogyakarta.jpg";
import royalMalioboro from "../../../assets/img/HOTEL/royal-malioboro-yogyakarta.jpg";

// API URL
const URL = import.meta.env.VITE_BE_API; // Set the base URL for your API

const Hotel = ({ onAddHotelClick, updateHotel }) => {
  const [hotels, setHotels] = useState([]); // State for storing hotel data
  const [loading, setLoading] = useState(false); // Loading state for fetching data
  const navigate = useNavigate(); // For navigation to hotel update page

  // Fetch hotel data
  useEffect(() => {
    const fetchHotels = async () => {
      setLoading(true);
      try {
        const response = await fetch(URL + "hotel/htl");
        const result = await response.json();
        setHotels(result.data); // Set data from backend
      } catch (error) {
        console.error("Error fetching hotels:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [URL]); // Fetch hotels when component mounts

  // Handle Update hotel action
  const handleUpdateHotel = (id) => {
    // Navigate to the update page with hotel ID
    navigate(`/update-hotel/${id}`);
  };

  // Handle Delete hotel action
  const handleDeleteHotel = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this hotel?");
    if (confirmDelete) {
      try {
        await fetch(URL + `hotel/htl/${id}`, {
          method: "DELETE",
        });
        setHotels(hotels.filter((hotel) => hotel.id !== id)); // Remove deleted hotel from state
      } catch (error) {
        console.error("Error deleting hotel:", error);
      }
    }
  };

  if (loading) {
    return <h1>Loading...</h1>; // Show loading state
  }

  return (
    <div className={styles.tableContainer}>
      <h2>All Hotels</h2>
      <a
        href="#"
        className={styles.addNewBtn}
        onClick={(e) => {
          e.preventDefault();
          onAddHotelClick(); // Trigger Add Hotel modal or action
        }}
      >
        <i className="fas fa-plus"> </i> Add New
      </a>
      <table>
        <thead>
          <tr>
            <th>Hotel Image</th>
            <th>Hotel Name</th>
            <th>Address</th>
            <th>Ratings</th>
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {hotels.length > 0 ? (
            hotels.map((hotel) => (
              <tr key={hotel.id}>
                <td>
                  <img alt={hotel.name_hotel} src={`../../../img/HOTEL/${hotel.hotel_image}`} height="50" width="50" />
                </td>
                <td>{hotel.name_hotel}</td>
                <td>{hotel.address}</td>
                <td>{"★".repeat(hotel.rating)}</td>
                <td className={styles.actions}>
                  <i className="fas fa-eye"> </i>
                </td>
                <td className={styles.actions}>
                  <i className="fas fa-edit" onClick={() => handleUpdateHotel(hotel.id)}></i>
                </td>
                <td className={styles.actions}>
                  <i className="fas fa-trash" onClick={() => handleDeleteHotel(hotel.id)}></i>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No hotels available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Hotel;
