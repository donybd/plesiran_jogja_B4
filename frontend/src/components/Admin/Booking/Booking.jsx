import React, { useState, useEffect } from "react";
import styles from "./Booking.module.css";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState("trip"); // Default to rental

  const API_BASE_URL = import.meta.env.VITE_BE_API;

  // Format date helper
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Fetch bookings based on selected type
  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      try {
        let endpoint = "";
        if (selectedType === "trip") {
          endpoint = "tour/booking";
        } else if (selectedType === "hotel") {
          endpoint = "hotel/booking_hotel";
        } else {
          endpoint = "rent/booking_rental";
        }

        const response = await fetch(API_BASE_URL + `${endpoint}`);
        const data = await response.json();
        setBookings(data.data); // Assuming API returns data in 'data.data'
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setBookings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [API_BASE_URL, selectedType]);

  // Handle delete booking
  const handleDelete = async (id) => {
    try {
      let endpoint = "";
      if (selectedType === "trip") {
        endpoint = `booking/${id}`;
      } else if (selectedType === "hotel") {
        endpoint = `booking_hotel/${id}`;
      } else {
        endpoint = `rent/booking_rental/${id}`;
      }

      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setBookings(bookings.filter((booking) => booking.id !== id));
        alert("Booking deleted successfully.");
      } else {
        alert("Failed to delete booking.");
      }
    } catch (error) {
      console.error("Error deleting booking:", error);
      alert("An error occurred while deleting the booking.");
    }
  };

  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.menu}>
          <button className={selectedType === "trip" ? styles.active : ""} onClick={() => setSelectedType("trip")}>
            Trip
          </button>
          <button className={selectedType === "hotel" ? styles.active : ""} onClick={() => setSelectedType("hotel")}>
            Hotel
          </button>
          <button className={selectedType === "rental" ? styles.active : ""} onClick={() => setSelectedType("rental")}>
            Rental
          </button>
        </div>

        <div className={styles.content}>
          <h2>{selectedType.charAt(0).toUpperCase() + selectedType.slice(1)} Bookings</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>{selectedType === "rental" ? "Vehicle Name" : selectedType === "hotel" ? "Hotel Name" : "Tour Name"}</th>
                <th>{selectedType === "rental" ? "Rental Date" : selectedType === "hotel" ? "Check-in Date" : "Tour Date"}</th>
                <th>{selectedType === "rental" ? "Return Date" : selectedType === "hotel" ? "Check-out Date" : "Amount of People"}</th>
                <th>Total</th>
                {/* Only render Location column for rental bookings */}
                {selectedType === "rental" && <th>Location</th>}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="7">Loading...</td>
                </tr>
              ) : bookings.length > 0 ? (
                bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.name || "N/A"}</td>
                    <td>{selectedType === "rental" ? booking.vehicle_name || "N/A" : selectedType === "hotel" ? booking.hotel || "N/A" : booking.tour_name || "N/A"}</td>
                    <td>{formatDate(selectedType === "rental" ? booking.rental_date : selectedType === "hotel" ? booking.check_in_date : booking.tour_date) || "N/A"}</td>
                    <td>{selectedType === "rental" ? formatDate(booking.return_date) || "N/A" : selectedType === "hotel" ? formatDate(booking.check_out_date) || "N/A" : booking.amount_people || "N/A"}</td>
                    <td>{`${selectedType === "rental" ? booking.total?.toLocaleString() : selectedType === "hotel" ? booking.total_price?.toLocaleString() : booking.price?.toLocaleString()} IDR` || "N/A"}</td>
                    {/* Only render Location column for rental bookings */}
                    {selectedType === "rental" && <td>{booking.location || "N/A"}</td>}
                    <td className={styles.action}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDelete(booking.id);
                        }}
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No bookings found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Booking;
