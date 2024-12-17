import React, { useState, useEffect } from "react";
import styles from "./TourPackages.module.css";

const TourPackages = ({ onAddTourClick, updateTour }) => {
  const [tourPackages, setTourPackages] = useState([]);
  const [loading, setLoading] = useState(false);

  const URL = import.meta.env.VITE_BE_API;

  useEffect(() => {
    async function fetchTourPackages() {
      try {
        setLoading(true);
        const response = await fetch(URL + "tour/list"); // Update the URL if necessary
        const result = await response.json();
        setTourPackages(result.data);
        console.log(result.data);
      } catch (error) {
        console.error("Error fetching tour packages:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTourPackages();
  }, [URL]);

  const handleDeleteTour = async (id) => {
    if (window.confirm("Are you sure you want to delete this tour package?")) {
      try {
        const response = await fetch(URL + `tour/list${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/jso  n",
          },
        });
        if (response.ok) {
          setTourPackages((prevPackages) => prevPackages.filter((tour) => tour.id !== id));
        } else {
          console.error("Failed to delete tour package");
        }
      } catch (error) {
        console.error("Error deleting tour package:", error);
      }
    }
  };

  const handleUpdateTour = (id) => {
    // Navigasi ke halaman UpdateTourPackage
    updateTour(id); // Pass the tour package ID to update
  };

  return (
    <>
      <div className={styles.tableContainer}>
        <h2>All Tour Packages</h2>
        <a
          href="#"
          className={styles.addNewBtn}
          onClick={(e) => {
            e.preventDefault(); // Prevent page reload
            onAddTourClick(); // Trigger function for adding a new tour
          }}
        >
          <i className="fas fa-plus"></i> Add New
        </a>
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Tour Images</th>
                <th>Tour Name</th>
                <th>Price</th>
                <th>No. Of Days</th>
                <th>View</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {tourPackages.map((tour, index) => (
                <tr key={index}>
                  <td>
                    <img alt={tour.name_tour} height="50" src={`../../../../public/img/${tour.tour_image}`} width="50" />
                  </td>
                  <td>{tour.name_tour}</td>
                  <td>{tour.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} IDR</td>
                  <td>{tour.duration} days</td>
                  <td className={styles.actions}>
                    <i className="fas fa-eye"></i>
                  </td>
                  <td className={styles.actions}>
                    <i className="fas fa-edit" onClick={() => handleUpdateTour(tour.id)}></i>
                  </td>

                  <td className={styles.actions}>
                    <i className="fas fa-trash" onClick={() => handleDeleteTour(tour.id)}></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default TourPackages;
