import React, { useState, useEffect } from "react";
import Navbar from "../../../components/User/Navbar";
import Footer from "../../../components/User/Footer";
import { useNavigate } from "react-router-dom";
import "../../../styles/rent.css";

// Komponen untuk Card Kendaraan
const VehicleCard = ({ vehicle }) => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    // Mengarahkan ke halaman detail kendaraan dengan membawa data kendaraan
    navigate("/rental/rent-detail", {
      state: { vehicleData: vehicle },
    });
  };

  return (
    <div className="vehicle-card">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={vehicle.image} alt={vehicle.title} />
        </div>
        <div className="col-md-8">
          <div className="vehicle-info">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h5>{vehicle.title}</h5>
                <p className="text-muted mb-2">Category: {vehicle.category}</p>
                <p className="mb-2">
                  <i className="bi bi-gear-fill me-2"></i>
                  {vehicle.transmission} <i className="bi bi-people-fill ms-3 me-2"></i>
                  {vehicle.capacity} Seats
                </p>
              </div>
              <div className="text-end">
                <div className="rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <span>{vehicle.rating}</span>
                </div>
                <p className="mb-2">{vehicle.price}/day</p>
              </div>
            </div>
            <div className="d-flex justify-content-end gap-2">
              <button className="btn-detail px-2 py-2" onClick={handleDetailClick}>
                Detail
              </button>
              <button className="btn-rent px-2 py-2" onClick={handleDetailClick}>
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Komponen Filter Kendaraan
const FilterSection = ({ onFilterChange }) => (
  <div className="filter-section">
    <h5>Type Vehicle</h5>
    {["Motorcycle", "Car"].map((type) => (
      <div className="form-check" key={type}>
        <input className="form-check-input" type="checkbox" id={type.toLowerCase()} onChange={(e) => onFilterChange("category", e.target.checked ? type : null)} />
        <label className="form-check-label" htmlFor={type.toLowerCase()}>
          {type}
        </label>
      </div>
    ))}

    <h5 className="mt-4">Rate</h5>
    {[5, 4, 3, 2, 1].map((stars) => (
      <div className="form-check" key={stars}>
        <input className="form-check-input" type="checkbox" id={`rate${stars}`} onChange={(e) => onFilterChange("rating", e.target.checked ? stars : null)} />
        <label className="form-check-label" htmlFor={`rate${stars}`}>
          {[...Array(stars)].map((_, i) => (
            <i className="bi bi-star-fill rating" key={i}></i>
          ))}
        </label>
      </div>
    ))}
  </div>
);

const Rent = () => {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    category: null,
    rating: null,
  });
  const URL = import.meta.env.VITE_BE_API;
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchVehicles() {
      try {
        setLoading(true);
        const response = await fetch(URL + "rent/vehicle");
        const result = await response.json();
        setVehicles(result.data);
        setFilteredVehicles(result.data); // Menampilkan semua kendaraan pertama kali
      } catch (error) {
        console.log("Error fetching vehicle data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchVehicles();
  }, [URL]);

  // Fungsi untuk menangani perubahan filter
  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, [filterType]: value };
      applyFilters(updatedFilters);
      return updatedFilters;
    });
  };

  // Fungsi untuk menerapkan filter
  const applyFilters = (updatedFilters) => {
    let filteredList = vehicles;

    // Filter berdasarkan kategori jika dipilih
    if (updatedFilters.category) {
      filteredList = filteredList.filter((vehicle) => vehicle.category === updatedFilters.category);
    }

    // Filter berdasarkan rating jika dipilih
    if (updatedFilters.rating) {
      filteredList = filteredList.filter((vehicle) => vehicle.rating >= updatedFilters.rating);
    }

    setFilteredVehicles(filteredList); // Update daftar kendaraan yang sudah difilter
  };

  return (
    <>
      <Navbar />
      <div className="container my-5 mt-5">
        <div className="row main" style={{ marginTop: "120px" }}>
          {/* Filter Section */}
          <div className="col-lg-3">
            <FilterSection onFilterChange={handleFilterChange} />
          </div>

          {/* Daftar Kendaraan */}
          <div className="col-lg-9">
            <div className="mb-3">
              <p>Showing {filteredVehicles.length} vehicles</p>
            </div>

            {loading ? (
              <h1>Loading...</h1>
            ) : (
              filteredVehicles.map((vehicle) => (
                <VehicleCard
                  key={vehicle.id}
                  vehicle={{
                    id: vehicle.id,
                    title: vehicle.vehicle_name,
                    image: `../../../img/` + vehicle.vehicle_image,
                    category: vehicle.category,
                    transmission: vehicle.transmission_type,
                    capacity: vehicle.seating_capacity,
                    rating: vehicle.rating,
                    price: vehicle.price,
                    year: vehicle.manufacture_year,
                    fuel: vehicle.fuel_type,
                  }}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Rent;
