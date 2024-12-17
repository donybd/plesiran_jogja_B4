import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/User/Navbar";
import Footer from "../../../components/User/Footer";
import clsx from "clsx";
import React from "react";
import hotelImage from "../../../assets/img/HOTEL/hotel-tentrem-yogyakarta.jpg";
import "../../../styles/reservation.css";
import imageOne from "../../../assets/img/RENTAL/depan.png";
import imageTwo from "../../../assets/img/RENTAL/zx.jpg";
import tourImage from "../../../assets/img/TOUR/1.jpg";
import EtiketHotel from "./e-ticket";

const MyReservation = () => {
  const [activeTab, setActiveTab] = useState("Trip");

  return (
    <>
      <Navbar />
      <section className="reservation" style={{ marginTop: "150px" }}>
        <div className="container my-5">
          <div className="row">
            {/* Sidebar */}
            <div className="col-md-3">
              <div className="sidebar" style={{ width: "230px", border: "1px solid #674121" }}>
                <div className="list-group">
                  <div className="list-group-item bg-secondary text-white">My Booking</div>
                  <a
                    href="#"
                    className={clsx({
                      "nav-link": true,
                      active: activeTab === "Trip",
                    })}
                    onClick={() => setActiveTab("Trip")}
                  >
                    <i className="fas fa-suitcase me-2"></i> Trip
                  </a>
                  <a
                    href="#"
                    className={clsx({
                      "nav-link": true,
                      active: activeTab === "Hotel",
                    })}
                    onClick={() => setActiveTab("Hotel")}
                  >
                    <i className="fas fa-hotel me-2"></i> Hotel
                  </a>
                  <a
                    href="#"
                    className={clsx({
                      "nav-link": true,
                      active: activeTab === "Rent",
                    })}
                    onClick={() => setActiveTab("Rent")}
                  >
                    <i className="fas fa-car me-2"></i> Rent
                  </a>
                </div>
              </div>
            </div>

            {/* Hotel Cards */}
            <div className="col-md-9">
              {activeTab === "Hotel" ? (
                <>
                  {/* Booked Hotel */}
                  <div className="hotel-card position-relative" style={{ border: "1px solid #674121", height: "290px" }}>
                    <div className="row">
                      <div className="col-md-4">
                        <img src={hotelImage} alt="Hotel Tentrem" className="img-fluid h-100" style={{ borderRadius: "0px" }} />
                      </div>
                      <div className="col-md-8">
                        <div className="text-end mt-2">
                          <span className="status-badge status-booked">Booked</span>
                        </div>
                        <div className="detail text-start">
                          <h5 className="namahotel mb-1">Hotel Tentrem Yogyakarta</h5>
                          <p className="alamat hotel mb-1">
                            <i className="fas fa-map-marker-alt"></i> Jl. P. Mangkubumi 72A, Yogyakarta 55233 Indonesia
                          </p>
                          <p className="cekin hotel mb-1">Check-In : 10 November 2024</p>
                          <p className="cekout hotel">Check-Out : 11 November 2024</p>
                          <div className="text-start mt-2">
                            <Link className="status-badge status-ticket" to={`/e-ticket`} style={{ textDecoration: "none" }}>
                              E-ticket
                            </Link>
                          </div>
                        </div>
                        <div className="text-end">
                          <button className="btn btn-cancel" style={{ borderRadius: "0px" }}>
                            Cancel
                          </button>
                          &nbsp;
                          <Link className="btn btn-details text-black" to={`/detail-reservasi`} style={{ borderRadius: "0px" }}>
                            Detail
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Completed Hotel */}
                  <div className="hotel-card position-relative" style={{ border: "1px solid #674121", height: "290px" }}>
                    <div className="row">
                      <div className="col-md-4">
                        <img src={hotelImage} alt="Hotel Tentrem" className="img-fluid h-100" style={{ borderRadius: "0px" }} />
                      </div>
                      <div className="col-md-8">
                        <div className="text-end mt-2">
                          <span className="status-badge status-completed">Completed</span>
                        </div>
                        <div className="detail text-start">
                          <h5 className="namahotel mb-1">Hotel Tentrem Yogyakarta</h5>
                          <p className="alamat hotel mb-1">
                            <i className="fas fa-map-marker-alt"></i> Jl. P. Mangkubumi 72A, Yogyakarta 55233 Indonesia
                          </p>
                          <p className="cekin hotel mb-1">Check-In : 10 November 2024</p>
                          <p className="cekout hotel">Check-Out : 11 November 2024</p>
                          <div className="text-start mt-2">
                            <Link className="status-badge status-ticket" to={`/e-ticket`} style={{ textDecoration: "none" }}>
                              E-ticket
                            </Link>
                          </div>
                          <div className="text-end mt-2">
                            <Link className="btn btn-review" to={`/riview`}>
                              Add Review
                            </Link>
                            &nbsp;
                            <Link className="btn btn-details text-black" to={`/detail-reservasi`} style={{ borderRadius: "0px" }}>
                              Detail
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
              {activeTab === "Trip" ? (
                <>
                  {/* Booked Hotel */}
                  <div className="hotel-card position-relative" style={{ border: "1px solid #674121", height: "290px" }}>
                    <div className="row">
                      <div className="col-md-4">
                        <img src={tourImage} alt="Hotel Tentrem" className="img-fluid h-100" style={{ borderRadius: "0px" }} />
                      </div>
                      <div className="col-md-8">
                        <div className="text-end mt-2">
                          <span className="status-badge status-booked">Booked</span>
                        </div>
                        <div className="detail text-start">
                          <h5 className="namahotel mb-1">Prambanan Temple Tour</h5>
                          <p className="alamat hotel mb-1">
                            <i className="fas fa-map-marker-alt"></i>5 Destinations
                          </p>
                          <p className="cekin hotel mb-1">From : 10 November 2024</p>
                          <p className="cekout hotel">To : 11 November 2024</p>
                        </div>
                        <div className="text-start mt-2">
                          <Link className="status-badge status-ticket" to={`/e-ticket`} style={{ textDecoration: "none" }}>
                            E-ticket
                          </Link>
                        </div>
                        <div className="text-end">
                          <button className="btn btn-cancel" style={{ borderRadius: "0px" }}>
                            Cancel
                          </button>
                          &nbsp;
                          <Link className="btn btn-details text-black" to={`/detail-reservasi`} style={{ borderRadius: "0px" }}>
                            Detail
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Completed Hotel */}
                  <div className="hotel-card position-relative" style={{ border: "1px solid #674121", height: "290px" }}>
                    <div className="row">
                      <div className="col-md-4">
                        <img src={tourImage} alt="Hotel Tentrem" className="img-fluid h-100" style={{ borderRadius: "0px" }} />
                      </div>
                      <div className="col-md-8">
                        <div className="text-end mt-2">
                          <span className="status-badge status-completed">Completed</span>
                        </div>
                        <div className="detail text-start">
                          <h5 className="namahotel mb-1">Prambanan Temple Tour</h5>
                          <p className="alamat hotel mb-1">
                            <i className="fas fa-map-marker-alt"></i>5 Destinations
                          </p>
                          <p className="cekin hotel mb-1">From : 10 November 2024</p>
                          <p className="cekout hotel">To : 11 November 2024</p>
                          <div className="text-start mt-2">
                            <Link className="status-badge status-ticket" to={`/e-ticket`} style={{ textDecoration: "none" }}>
                              E-ticket
                            </Link>
                          </div>
                          <div className="text-end mt-2">
                            <Link className="btn btn-review" to={`/riview`}>
                              Add Review
                            </Link>
                            &nbsp;
                            <Link className="btn btn-details text-black" to={`/detail-reservasi`} style={{ borderRadius: "0px" }}>
                              Detail
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
              {activeTab === "Rent" ? (
                <>
                  {/* Booked Hotel */}
                  <div className="hotel-card position-relative" style={{ border: "1px solid #674121", height: "290px" }}>
                    <div className="row">
                      <div className="col-md-4">
                        <img src={imageOne} alt="Hotel Tentrem" className="img-fluid h-100" style={{ borderRadius: "0px" }} />
                      </div>
                      <div className="col-md-8">
                        <div className="text-end mt-2">
                          <span className="status-badge status-booked">Booked</span>
                        </div>
                        <div className="detail text-start">
                          <h5 className="namahotel mb-1">Porsche GT4-RS</h5>
                          <p className="alamat hotel mb-1">
                            <i className="fas fa-map-marker-alt"></i> Jl. P. Mangkubumi 72A, Yogyakarta 55233 Indonesia
                          </p>
                          <p className="cekin hotel mb-1">From : 10 November 2024</p>
                          <p className="cekout hotel">To : 11 November 2024</p>
                          <div className="text-start mt-2">
                            {" "}
                            <Link className="status-badge status-ticket" to={`/e-ticket`} style={{ textDecoration: "none" }}>
                              E-ticket
                            </Link>{" "}
                          </div>
                        </div>
                        <div className="text-end">
                          <button className="btn btn-cancel" style={{ borderRadius: "0px" }}>
                            Cancel
                          </button>
                          &nbsp;
                          <Link className="btn btn-details text-black" to={`/detail-reservasi`} style={{ borderRadius: "0px" }}>
                            Detail
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Completed Hotel */}
                  <div className="hotel-card position-relative" style={{ border: "1px solid #674121", height: "290px" }}>
                    <div className="row">
                      <div className="col-md-4">
                        <img src={imageTwo} alt="Hotel Tentrem" className="img-fluid h-100" style={{ borderRadius: "0px" }} />
                      </div>
                      <div className="col-md-8">
                        <div className="text-end mt-2">
                          <span className="status-badge status-completed">Completed</span>
                        </div>
                        <div className="detail text-start">
                          <h5 className="namahotel mb-1">Kawasaki ZX-10r</h5>
                          <p className="alamat hotel mb-1">
                            <i className="fas fa-map-marker-alt"></i> Jl. P. Mangkubumi 72A, Yogyakarta 55233 Indonesia
                          </p>
                          <p className="cekin hotel mb-1">From : 10 November 2024</p>
                          <p className="cekout hotel">To : 11 November 2024</p>
                          <div className="text-start mt-2">
                            <Link className="status-badge status-ticket" to={`/e-ticket`} style={{ textDecoration: "none" }}>
                              E-ticket
                            </Link>
                          </div>
                          <div className="text-end mt-2">
                            <Link className="btn btn-review" to={`/riview`}>
                              Add Review
                            </Link>
                            &nbsp;
                            <Link className="btn btn-details text-black" to={`/detail-reservasi`} style={{ borderRadius: "0px" }}>
                              Detail
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
              {activeTab === "Refunds" ? (
                <>
                  {/* Booked Hotel */}
                  <div className="hotel-card position-relative" style={{ border: "1px solid #674121", height: "290px" }}>
                    <div className="row">
                      <div className="col-md-4">
                        <img src={hotelImage} alt="Hotel Tentrem" className="img-fluid h-100" style={{ borderRadius: "0px" }} />
                      </div>
                      <div className="col-md-8">
                        <div className="text-end mt-2">
                          <span className="status-badge status-booked">Booked</span>
                        </div>
                        <div className="detail text-start">
                          <h5 className="namahotel mb-1">Hotel Tentrem Yogyakarta</h5>
                          <p className="alamat hotel mb-1">
                            <i className="fas fa-map-marker-alt"></i> Jl. P. Mangkubumi 72A, Yogyakarta 55233 Indonesia
                          </p>
                          <p className="cekin hotel mb-1">Check-In : 10 November 2024</p>
                          <p className="cekout hotel">Check-Out : 11 November 2024</p>
                          <div className="text-start mt-2">
                            <Link className="status-badge status-ticket" to={`/e-ticket`} style={{ textDecoration: "none" }}>
                              E-ticket
                            </Link>
                          </div>
                        </div>
                        <div className="text-end">
                          <button className="btn btn-cancel" style={{ borderRadius: "0px" }}>
                            Cancel
                          </button>
                          &nbsp;
                          <Link className="btn btn-details text-black" to={`/detail-reservasi`} style={{ borderRadius: "0px" }}>
                            Detail
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Completed Hotel */}
                  <div className="hotel-card position-relative" style={{ border: "1px solid #674121", height: "290px" }}>
                    <div className="row">
                      <div className="col-md-4">
                        <img src={hotelImage} alt="Hotel Tentrem" className="img-fluid h-100" style={{ borderRadius: "0px" }} />
                      </div>
                      <div className="col-md-8">
                        <div className="text-end mt-2">
                          <span className="status-badge status-completed">Completed</span>
                        </div>
                        <div className="detail text-start">
                          <h5 className="namahotel mb-1">Hotel Tentrem Yogyakarta</h5>
                          <p className="alamat hotel mb-1">
                            <i className="fas fa-map-marker-alt"></i> Jl. P. Mangkubumi 72A, Yogyakarta 55233 Indonesia
                          </p>
                          <p className="cekin hotel mb-1">Check-In : 10 November 2024</p>
                          <p className="cekout hotel">Check-Out : 11 November 2024</p>
                          <div className="text-start mt-2">
                            <Link className="status-badge status-ticket" to={`/e-ticket`} style={{ textDecoration: "none" }}>
                              E-ticket
                            </Link>
                          </div>
                          <div className="text-end mt-2">
                            <Link className="btn btn-review" to={`/riview`}>
                              Add Review
                            </Link>
                            &nbsp;
                            <Link className="btn btn-details text-black" to={`/detail-reservasi`} style={{ borderRadius: "0px" }}>
                              Detail
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}

              {activeTab === "Notification" ? (
                <>
                  {/* Booked Hotel */}
                  <div className="hotel-card position-relative" style={{ border: "1px solid #674121", height: "290px" }}>
                    <div className="row">
                      <div className="col-md-4">
                        <img src={hotelImage} alt="Hotel Tentrem" className="img-fluid h-100" style={{ borderRadius: "0px" }} />
                      </div>
                      <div className="col-md-8">
                        <div className="text-end mt-2">
                          <span className="status-badge status-booked">Booked</span>
                        </div>
                        <div className="detail text-start">
                          <h5 className="namahotel mb-1">Hotel Tentrem Yogyakarta</h5>
                          <p className="alamat hotel mb-1">
                            <i className="fas fa-map-marker-alt"></i> Jl. P. Mangkubumi 72A, Yogyakarta 55233 Indonesia
                          </p>
                          <p className="cekin hotel mb-1">Check-In : 10 November 2024</p>
                          <p className="cekout hotel">Check-Out : 11 November 2024</p>
                          <div className="text-start mt-2">
                            <Link className="status-badge status-ticket" to={`/e-ticket`} style={{ textDecoration: "none" }}>
                              E-ticket
                            </Link>
                          </div>
                        </div>
                        <div className="text-end">
                          <button className="btn btn-cancel" style={{ borderRadius: "0px" }}>
                            Cancel
                          </button>
                          &nbsp;
                          <Link className="btn btn-details text-black" to={`/detail-reservasi`} style={{ borderRadius: "0px" }}>
                            Detail
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Completed Hotel */}
                  <div className="hotel-card position-relative" style={{ border: "1px solid #674121", height: "290px" }}>
                    <div className="row">
                      <div className="col-md-4">
                        <img src={hotelImage} alt="Hotel Tentrem" className="img-fluid h-100" style={{ borderRadius: "0px" }} />
                      </div>
                      <div className="col-md-8">
                        <div className="text-end mt-2">
                          <span className="status-badge status-completed">Completed</span>
                        </div>
                        <div className="detail text-start">
                          <h5 className="namahotel mb-1">Hotel Tentrem Yogyakarta</h5>
                          <p className="alamat hotel mb-1">
                            <i className="fas fa-map-marker-alt"></i> Jl. P. Mangkubumi 72A, Yogyakarta 55233 Indonesia
                          </p>
                          <p className="cekin hotel mb-1">Check-In : 10 November 2024</p>
                          <p className="cekout hotel">Check-Out : 11 November 2024</p>
                          <div className="text-start mt-2">
                            <Link className="status-badge status-ticket" to={`/e-ticket`} style={{ textDecoration: "none" }}>
                              E-ticket
                            </Link>
                          </div>
                          <div className="text-end mt-2">
                            <Link className="btn btn-review" to={`/riview`}>
                              Add Review
                            </Link>
                            &nbsp;
                            <Link className="btn btn-details text-black" to={`/detail-reservasi`} style={{ borderRadius: "0px" }}>
                              Detail
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MyReservation;
