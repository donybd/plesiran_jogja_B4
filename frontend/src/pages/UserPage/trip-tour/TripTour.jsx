import Footer from "../../../components/User/Footer";
import Navbar from "../../../components/User/Navbar";
import "../../../styles/tour/tour.css";

import React from "react";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Hero = () => (
  <div className="hero-trip">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="hero-overlay"></div>
        </div>
      </div>
    </div>
  </div>
);

const HeroContentTrip = () => (
  <section className="hero-contenttrip text-white">
    <h1 className="text-jdl pt-0 text-center">
      All Tours <br />
      Destinations on offer, all with guaranteed departure dates!
    </h1>
  </section>
);

const TourCard = ({ image, title, days, destinations, price, id }) => (
  <div className="col-lg-4 col-md-6 mb-4">
    <div className="card tour-card rounded-4 border">
      <img src={`../../../../public/img/` + image} className="card-img-top" alt={title} />
      <div className="card-body p-0 pb-3">
        <h5 className="card-title-tour text-center">{title}</h5>
        <hr className="line-tour" />
        <p className="card-text-ikon">
          <i className="fa-regular fa-clock"></i> {days}
        </p>
        <p className="card-text-ikon">
          <i className="fa-solid fa-map-location-dot"></i> {destinations}
        </p>
        <p className="card-text-ikon">
          <i className="fa-solid fa-car"></i> Includes
        </p>
        <p className="card-text-ikon">
          <i className="fa-solid fa-hotel"></i>
          <i className="fa-solid fa-star no-padding" style={{ color: "#ffd43b" }}></i>
          <i className="fa-solid fa-star no-padding" style={{ color: "#ffd43b" }}></i>
          <i className="fa-solid fa-star no-padding" style={{ color: "#ffd43b" }}></i>
          <i className="fa-solid fa-star no-padding" style={{ color: "#ffd43b" }}></i>
        </p>
        <p className="card-text-ikon">
          <i className="fa-solid fa-tag"></i> {price}
        </p>
        <hr className="line-tour" />
        <Link to={`/trip-tour/${id}`} className="btn w-20 btn-tour">
          Choose
        </Link>
        &nbsp;
        <Link to={`/trip-tour/${id}`} className="btn w-20 text-black">
          Details
        </Link>
      </div>
    </div>
  </div>
);

const ToursList = () => {
  const URL = import.meta.env.VITE_BE_API;
  const [tours, setTours] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchTours() {
      try {
        setLoading(true);

        const response = await fetch(URL + "tour/list");
        const result = await response.json();

        setTours(result.data);
      } catch (error) {
        console.log("Something went wrong");
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchTours();
  }, [URL + "tour/list" + ""]);

  return !loading && tours ? (
    <div className="list-tour">
      <div className="container my-5">
        <div className="row">
          {tours.map((tour, index) => (
            <TourCard key={index} title={tour.name_tour} days={tour.duration} destinations={tour.destination} price={"Rp" + tour.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} image={tour.tour_image} id={tour.id} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

const TripTour = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroContentTrip />
      <ToursList />
      <Footer />
    </>
  );
};

export default TripTour;
