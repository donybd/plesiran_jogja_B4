import Navbar from "../../../../components/User/Navbar";
import Footer from "../../../../components/User/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/bundle";
import "swiper/css/navigation";

import "../../../../styles/detail-desti.css";
import { useLocation } from "react-router-dom";
import React from "react";

const DestinationDetail = () => {
  const location = useLocation();
  const { destination } = location.state || {}; // Get destination data from location state

  // Early return if destination is not found
  if (!destination) {
    return <h1>Destination Not Found</h1>;
  }

  // Check if there are multiple images for the Swiper
  const images = [destination.image_destination, destination.image2_dest, ...(Array.isArray(destination.image3_dest) ? destination.image3_dest : [destination.image3_dest])].filter(Boolean); // Filter untuk menghapus nilai undefined atau null

  return (
    <>
      <Navbar />

      {/* Swiper Component */}
      <div className="container-fluid p-0">
        <Swiper modules={[Navigation]} spaceBetween={10} slidesPerView={1} loop={true} navigation={true}>
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={`../../../img/${image}`}
                alt={`destination.name_dest ${index + 1}`}
                className="d-block w-100"
                style={{
                  width: "100%",
                  height: "800px",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Information Section */}
      <section className="judulinformasi mt-1">
        <div className="tittle text-center bg-secondary">
          <ul className="list-unstyled d-flex justify-content-center align-items-center">
            <li className="tittle-item">
              <a className="judul-info text-light">
                Information <i className="las la-paperclip"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Description Section */}
      <section className="informasi">
        <div className="container">
          <div className="row align-items-stretch">
            <div className="deskripsi col-lg-6 order-1 order-lg-1 pe-lg-2 py-5 d-flex flex-column">
              <h1 className="mb-0">{destination.name_dest}</h1>
              <h2>What You'll Experience?</h2>
              <hr style={{ width: "369px", border: "1px solid #674121", marginTop: "5px" }} />
              <p>{destination.description}</p>
            </div>
            <div className="deskripsi col-lg-6 order-2 order-lg-2 d-flex align-items-center mb-0">
              <img src={`../../../img/` + destination.image2_dest} alt={destination.name_dest} className="img-fluid no-border-radius " />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="fasilitas">
        <div className="container">
          <div className="row g-0">
            <div className="col-md-6">
              <img src={`../../../img/` + destination.image3_dest} alt={destination.name_dest} className="img-fluid no-border-radius " />
            </div>
            <div className="col-md-6">
              <div className="info-box text-start">
                <p className="see-box text-light">
                  <i className="las la-clock me-1"></i>
                  <span className="open-text">{destination.opening_hours}</span>
                  <a href="#" className="opening-hours-link" data-bs-toggle="modal" data-bs-target="#openingHoursModal"></a>
                </p>

                <h5 className="judul-info2">Facilities</h5>
                <div className="row facilities-box mb-1 mt-1">
                  <div className="col-6 facilities-icon">
                    <i className="las la-wifi"></i> {destination.facilities}
                  </div>
                </div>

                <div className="see-box2 text-light mt-3">
                  <h5 className="judul-info">Additional Information</h5>
                  <ul>
                    <li>{destination.additional_information}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entrance Fees Section */}
      <section className="ticket mt-2">
        <div className="container">
          <h3 className="judul-info2">Entrance Fees:</h3>
          <div className="table-responsive">
            <table className="table table-bordered text-center custom-table">
              <thead>
                <tr>
                  <th className="header-cell">Age</th>
                  <th className="header-cell">Domestic Tourist</th>
                  <th className="header-cell">International Tourist</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Adult</td>
                  <td>{destination.harga_adult_domestic}</td>
                  <td>{destination.harga_adult_international}</td>
                </tr>
                <tr>
                  <td>Children</td>
                  <td>{destination.harga_child_domestic}</td>
                  <td>{destination.harga_child_international}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="travel-tips mt-3">
        <div className="container">
          <div className="bg py-1">
            <h4 className="judul-info3 ms-1">Travel Tips</h4>
            <ol className="ol-li">
              <li>{destination.travel_tips}.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location mt-2 mb-5">
        <div className="container">
          <h4 className="judul-info2 text-start ">Location </h4>
          <p className="text-p">Search location </p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63245.98371954782!2d110.33364474043654!3d-7.803163418449381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787bd5b6bc5%3A0x21723fd4d3684f71!2sYogyakarta%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1734271568282!5m2!1sid!2sid"
              width="600"
              height="450"
              loading="lazy"
              style={{ border: "0", width: "100%" }}
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DestinationDetail;
