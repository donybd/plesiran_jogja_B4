import React, { useState } from "react";
import styles from "./AddRental.module.css";
import { useNavigate } from "react-router-dom";

const URL = import.meta.env.VITE_BE_API;

const AddRental = () => {
  const [vehicleName, setVehicleName] = useState("");
  const [category, setCategory] = useState("");
  const [typeVehicle, setTypeVehicle] = useState("");
  const [transmissionType, setTransmissionType] = useState("");
  const [manufactureYear, setManufactureYear] = useState("");
  const [seatingCapacity, setSeatingCapacity] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [vehicleImage, setVehicleImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate required fields
    if (!vehicleName || !category || !typeVehicle || !transmissionType || !manufactureYear || !seatingCapacity || !fuelType || !rating || !price) {
      alert("Please fill in all fields.");
      setLoading(false);
      return;
    }

    if (isNaN(price) || price <= 0) {
      alert("Price must be a positive number.");
      setLoading(false);
      return;
    }

    if (isNaN(rating) || rating < 0 || rating > 5) {
      alert("Rating must be between 0 and 5.");
      setLoading(false);
      return;
    }

    // Create form data
    const formData = new FormData();
    formData.append("vehicle_name", vehicleName);
    formData.append("category", category);
    formData.append("type_vehicle", typeVehicle);
    formData.append("transmission_type", transmissionType);
    formData.append("manufacture_year", manufactureYear);
    formData.append("seating_capacity", seatingCapacity);
    formData.append("fuel_type", fuelType);
    formData.append("rating", rating);
    formData.append("price", price);
    if (vehicleImage) {
      formData.append("vehicle_image", vehicleImage);
    }

    try {
      const response = await fetch(`${URL}/rent/vehicle`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Vehicle added successfully!");
        navigate("/admin");
      } else {
        const errorData = await response.json();
        alert(`Failed to add vehicle: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      alert("An error occurred while adding the vehicle.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.content}>
      <h2>Add New Vehicle</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="vehicleName">Vehicle Name</label>
          <input type="text" id="vehicleName" value={vehicleName} onChange={(e) => setVehicleName(e.target.value)} required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="category">Category</label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Select Category</option>
            <option value="Car">Car</option>
            <option value="Motorcycle">Motorcycle</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="typeVehicle">Type Vehicle</label>
          <input type="text" id="typeVehicle" value={typeVehicle} onChange={(e) => setTypeVehicle(e.target.value)} required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="transmissionType">Transmission Type</label>
          <select id="transmissionType" value={transmissionType} onChange={(e) => setTransmissionType(e.target.value)} required>
            <option value="">Select Transmission</option>
            <option value="Manual">Manual</option>
            <option value="Automatic">Automatic</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="manufactureYear">Manufacture Year</label>
          <input type="number" id="manufactureYear" value={manufactureYear} onChange={(e) => setManufactureYear(e.target.value)} required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="seatingCapacity">Seating Capacity</label>
          <input type="number" id="seatingCapacity" value={seatingCapacity} onChange={(e) => setSeatingCapacity(e.target.value)} required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="fuelType">Fuel Type</label>
          <input type="text" id="fuelType" value={fuelType} onChange={(e) => setFuelType(e.target.value)} required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="rating">Rating</label>
          <input type="number" step="0.01" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="price">Price (IDR/day)</label>
          <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="vehicleImage">Vehicle Image</label>
          <input type="file" id="vehicleImage" accept="image/*" onChange={(e) => setVehicleImage(e.target.files[0])} />
        </div>

        <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? "Adding..." : "Add Vehicle"}
        </button>
      </form>
    </div>
  );
};

export default AddRental;
