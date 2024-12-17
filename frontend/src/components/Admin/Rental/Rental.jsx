import React, { useState, useEffect } from "react";
import styles from "./Rental.module.css";
import { useNavigate } from "react-router-dom";
import imagePlaceholder from "../../../assets/img/RENTAL/depan.png"; // Placeholder if image is missing
// Import backend URL and authentication token if needed
const URL = import.meta.env.VITE_BE_API;

const Rental = ({ updateRental, onAddRentalClick }) => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch vehicles from the backend
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await fetch(URL + "rent/vehicle");
        const data = await response.json();
        setVehicles(data.data); // Set fetched vehicle data
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, [URL]);

  // Delete vehicle
  const handleDelete = async (id) => {
    try {
      const response = await fetch(URL + `rent/vehicle/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setVehicles(vehicles.filter((vehicle) => vehicle.id !== id)); // Remove deleted vehicle from the list
        alert("Vehicle deleted successfully.");
      } else {
        alert("Failed to delete the vehicle.");
      }
    } catch (error) {
      console.error("Error deleting vehicle:", error);
      alert("An error occurred while deleting the vehicle.");
    }
  };

  // Navigate to the vehicle details or edit page
  const handleEdit = (vehicleId) => {
    navigate(`/admin/vehicle/edit/${vehicleId}`); // Redirect to edit page (create this route for editing vehicles)
  };

  return (
    <>
      <div className={styles.content}>
        <div className={styles.tableContainer}>
          <h2>All Rental</h2>
          <a
            href="#"
            className={styles.addNewBtn}
            onClick={(e) => {
              e.preventDefault(); // Prevent page reload
              onAddRentalClick(); // Trigger parent function to add a new rental
            }}
          >
            <i className="fas fa-plus"> </i> Add New
          </a>
          <table>
            <thead>
              <tr>
                <th>Vehicle images</th>
                <th>Vehicle Name</th>
                <th>Price</th>
                <th>Type Vehicle</th>
                <th>View</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="7">Loading...</td>
                </tr>
              ) : (
                vehicles.map((vehicle) => (
                  <tr key={vehicle.id}>
                    <td>
                      <img alt={vehicle.vehicle_name} height="50" src={`../../../img/` + vehicle.vehicle_image} width="100%" />
                    </td>
                    <td>{vehicle.vehicle_name}</td>
                    <td>{vehicle.price} IDR/days</td>
                    <td>{vehicle.category}</td>
                    <td className={styles.actions}>
                      <i className="fas fa-eye"> </i>
                    </td>
                    <td className={styles.actions}>
                      <i className="fas fa-edit" onClick={() => handleEdit(vehicle.id)}></i>
                    </td>
                    <td className={styles.actions}>
                      <i className="fas fa-trash" onClick={() => handleDelete(vehicle.id)}></i>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Rental;
