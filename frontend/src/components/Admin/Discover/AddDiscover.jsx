import styles from "../Hotel/AddHotel.module.css";
import React, { useState } from "react";
// import { createDestination } from "../../../services/dest_services";

const AddDiscover = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name_dest: "",
    nama_category: "",
    description: "",
    opening_hours: "",
    facilities: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Status untuk loading
  const [errorMessage, setErrorMessage] = useState(""); // Status untuk error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    // Validasi tambahan jika diperlukan
    if (!formData.name_dest || !formData.nama_category || !formData.description) {
      setErrorMessage("All fields are required.");
      setIsSubmitting(false);
      return;
    }

    try {
      await createDestination(formData);
      alert("Destination added successfully!");
      setFormData({
        name_dest: "",
        nama_category: "",
        description: "",
        opening_hours: "",
        facilities: "",
      });
      onAdd(); // Refresh list or navigate back
    } catch (error) {
      console.error("Error adding destination:", error);
      setErrorMessage("Failed to add destination. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formSection}>
      <h2>Add Destination</h2>

      {/* Field Name */}
      <label htmlFor="name_dest">Destination Name</label>
      <input type="text" id="name_dest" name="name_dest" placeholder="Enter destination name" value={formData.name_dest} onChange={handleChange} required />

      {/* Field Category */}
      <label htmlFor="nama_category">Category</label>
      <input type="text" id="nama_category" name="nama_category" placeholder="Enter category" value={formData.nama_category} onChange={handleChange} required />

      {/* Field Description */}
      <label htmlFor="description">Description</label>
      <textarea id="description" name="description" placeholder="Enter description" value={formData.description} onChange={handleChange} required />

      {/* Field Opening Hours */}
      <label htmlFor="opening_hours">Opening Hours</label>
      <input type="text" id="opening_hours" name="opening_hours" placeholder="Enter opening hours" value={formData.opening_hours} onChange={handleChange} />

      {/* Field Facilities */}
      <label htmlFor="facilities">Facilities</label>
      <input type="text" id="facilities" name="facilities" placeholder="Enter facilities (e.g., WiFi, Parking)" value={formData.facilities} onChange={handleChange} />

      {/* Error Message */}
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}

      {/* Submit Button */}
      <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
        {isSubmitting ? "Submitting..." : "Add Destination"}
      </button>
    </form>
  );
};

export default AddDiscover;
