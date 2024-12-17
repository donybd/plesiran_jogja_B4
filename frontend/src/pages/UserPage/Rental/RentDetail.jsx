import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../../../components/User/Navbar";
import Footer from "../../../components/User/Footer";
import "../../../styles/rent-detail.css";

const RentDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { vehicleData } = location.state || {}; // Ambil data kendaraan yang dikirim

  // Cek jika tidak ada data kendaraan
  if (!vehicleData) {
    return <h1>Vehicle not found</h1>; // Tangani jika data kendaraan tidak ada
  }

  // State untuk tanggal mulai dan selesai
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculateDuration = (start, end) => {
    if (!start || !end) return 0;

    const startDate = new Date(start);
    const endDate = new Date(end);
    const timeDiff = endDate - startDate;
    const dayDiff = timeDiff / (1000 * 3600 * 24); // Menghitung selisih hari

    return dayDiff > 0 ? dayDiff : 0; // Pastikan durasi minimal 1 hari
  };

  const calculateTotalPrice = (duration) => {
    if (duration === 0) return 0;
    const pricePerDay = vehicleData.price; // Harga per hari dari data kendaraan
    return pricePerDay * duration;
  };

  const handleDateChange = (field, value) => {
    if (field === "startDate" && endDate && new Date(value) > new Date(endDate)) {
      alert("Start date cannot be after end date.");
      return;
    }
    if (field === "endDate" && startDate && new Date(value) < new Date(startDate)) {
      alert("End date cannot be before start date.");
      return;
    }

    field === "startDate" ? setStartDate(value) : setEndDate(value);
  };

  const duration = calculateDuration(startDate, endDate);
  const totalPrice = calculateTotalPrice(duration);

  const handleRentNow = () => {
    if (duration === 0) {
      alert("Please select a valid rental period.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      navigate("/rental/rent-booking", { state: { vehicleData, startDate, endDate, totalPrice } });
      setIsSubmitting(false);
    }, 1000); // Simulasi waktu proses
  };

  return (
    <>
      <Navbar />
      <section className="rentinfo" style={{ marginTop: "150px" }}>
        <div className="container my-5">
          <div className="row">
            {/* Kiri: Gambar, Info, Lokasi Pickup */}
            <div className="col-md-8">
              <h2 className="titlerentcar fs-20 bold">{vehicleData.title}</h2> {/* Menampilkan nama kendaraan */}
              <div className="car-images mb-4">
                <img src={vehicleData.image || "https://via.placeholder.com/300x200?text=No+Image+Available"} className="img-fluid main-image h-auto" alt="Main Car Image" />
              </div>
              {/* Spesifikasi Kendaraan */}
              <div className="specifications p-3 mb-3">
                <div className="title-box">Specification</div>
                <div className="row">
                  <div className="col-5 d-flex align-items-center gap-2">
                    <i className="bi bi-gear-fill"></i> {vehicleData.transmission}
                  </div>
                  <div className="col-5 d-flex align-items-center gap-2">
                    <i className="bi bi-people-fill"></i> {vehicleData.capacity} Orang
                  </div>
                  <div className="col-2 d-flex align-items-center gap-2">
                    <i className="bi bi-calendar-fill"></i> {vehicleData.year}
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-5 d-flex align-items-center gap-2">
                    <i className="bi bi-speedometer2"></i> {vehicleData.engine_capacity} cc
                  </div>
                  <div className="col-7 d-flex align-items-center gap-2">
                    <i className="bi bi-fuel-pump-fill"></i> {vehicleData.fuel}
                  </div>
                </div>
              </div>
            </div>
            {/* Kanan: Pemesanan */}
            <div className="col-md-4">
              <div className="booking-card p-4">
                <h5>From:</h5>
                <input type="date" className="form-control mb-2" value={startDate} min={new Date().toISOString().split("T")[0]} onChange={(e) => handleDateChange("startDate", e.target.value)} />
                <h5>To:</h5>
                <input type="date" className="form-control mb-3" value={endDate} min={startDate || new Date().toISOString().split("T")[0]} onChange={(e) => handleDateChange("endDate", e.target.value)} />
                <h6 className="sub-total text-center">Sub Total</h6>
                <h4 className="price text-center">Rp {totalPrice.toLocaleString()}</h4>
                <button className="btn btn-warning w-100 mt-2" onClick={handleRentNow} disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Rent Now"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RentDetail;
