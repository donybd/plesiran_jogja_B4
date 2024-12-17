import React, { useEffect, useState } from "react";
import { FaClock, FaMapMarkerAlt, FaCar, FaHotel, FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";

const Package = () => {
  const [tours, setTours] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTours() {
      try {
        const response = await fetch(`${import.meta.env.VITE_BE_API}tour/fav`);
        const result = await response.json();
        setTours(result.data); // Set all tours
        setFavorites(result.data.filter((tour) => tour.is_favorite)); // Set favorites
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch tours", error);
        setLoading(false);
      }
    }

    fetchTours();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const TourCard = ({ image, title, days, destinations, price, id }) => (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-4 card-spacing">
      <div className="card">
        <img src={`/img/${image}`} className="card-img-top" alt={title} />
        <div className="card-bodypckg">
          <h5 className="card-title mt-2">{title}</h5>
          <hr className="line-title mt-2" />
          <ul className="list-unstyled text-start mt-2 mx-4">
            <li>
              <FaClock className="color-ikon mx-2" size={20} /> {days}
            </li>
            <li>
              <FaMapMarkerAlt className="color-ikon mx-2" size={20} /> {destinations}
            </li>
            <li>
              <FaCar className="color-ikon mx-2" size={20} /> Include
            </li>

            <li>
              <FaTag className="color-ikon mx-2" size={20} /> Rp. {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </li>
          </ul>
          <hr className="line-list mb-2" />
          <div className="d-flex justify-content-between ms-2 me-2">
            <Link to={`/trip-tour/${id}`} className="btn-pkg1 mt-2 mb-3">
              Choose
            </Link>
            <a href={`/trip-tour/${id}`} className="btn-pkg2 mt-2 mb-3">
              Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="package-hmpg text-center mt-4">
      <div className="container">
        <h1 className="txt-choice">
          Choice Your <span className="txt-pkg">Package</span>
        </h1>
        <div className="row mt-4 row-margin">
          {/* Render favorite tours first */}
          {favorites.map((tour, index) => (
            <TourCard key={index} title={tour.name_tour} days={tour.duration} destinations={tour.destination} price={"Rp" + tour.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} image={tour.tour_image} id={tour.id} />
          ))}

          {/* Render other tours */}
          {tours
            .filter((tour) => !favorites.some((fav) => fav.id === tour.id))
            .map((tour, index) => (
              <TourCard key={index} title={tour.name_tour} days={tour.duration} destinations={tour.destination} price={"Rp" + tour.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} image={tour.tour_image} id={tour.id} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Package;
