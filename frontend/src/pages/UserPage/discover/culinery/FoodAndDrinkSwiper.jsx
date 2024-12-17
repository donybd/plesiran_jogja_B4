import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";

const FoodAndDrinkSwiper = () => {
  const [culinary, setCulinary] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const URL = import.meta.env.VITE_BE_API;
  const navigate = useNavigate();

  // Fetch data from API
  useEffect(() => {
    const fetchCulinary = async () => {
      try {
        const response = await fetch(`${URL}discover/culinary`);
        if (!response.ok) {
          throw new Error("Failed to fetch culinary data");
        }
        const result = await response.json();
        setCulinary(result.data);
      } catch (err) {
        setError("Unable to load culinary data. Please try again later.");
        console.error("Error fetching culinary data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCulinary();
  }, [URL]);

  const handleDetailClick = (culinaryItem) => {
    navigate("/discover/culinary-food", {
      state: { dataCulinary: culinaryItem },
    });
  };

  // Filter data by category
  const filteredCulinary = {
    fd: culinary.filter((item) => item.category === "FD"),
    gift: culinary.filter((item) => item.category === "Gift"),
    places: culinary.filter((item) => item.category === "Places"),
  };

  const renderSlides = (slides) => {
    if (!slides || slides.length === 0) {
      return <p>No items found</p>;
    }
    const truncateText = (text, wordLimit) => {
      if (!text) return "";
      const words = text.split(" ");
      return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
    };

    return slides.map((slide, index) => (
      <SwiperSlide key={index} style={styles.swiperSlide}>
        <div style={styles.card}>
          <div style={styles.cardImgContainer}>
            <img src={`../../../img/Kuliner/${slide.image_1}`} alt={slide.name} style={styles.cardImg} />
          </div>
          <div style={styles.cardContent}>
            <h5 style={styles.cardTitle}>{slide.name}</h5>
            <p style={styles.cardDescription}>{truncateText(slide.description, 10)}</p>
            <button style={styles.cardReadMore} onClick={() => handleDetailClick(slide)}>
              Read More
            </button>
          </div>
        </div>
      </SwiperSlide>
    ));
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div>
          <h2 style={styles.judulList}>Food & Drink</h2>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={-5}
            slidesPerView={3}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={styles.swiper}
          >
            {renderSlides(filteredCulinary.fd)}
          </Swiper>
        </div>

        <div>
          <h2 style={styles.judulList}>Find Gifts Here</h2>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={-5}
            slidesPerView={3}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={styles.swiper}
          >
            {renderSlides(filteredCulinary.gift)}
          </Swiper>
        </div>

        <div>
          <h2 style={styles.judulList}>Places to Eat</h2>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={-5}
            slidesPerView={3}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={styles.swiper}
          >
            {renderSlides(filteredCulinary.places)}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "20px 0",
  },
  container: {
    width: "90%",
    margin: "0 auto",
  },
  judulList: {
    fontSize: "48px",
    fontWeight: "600",
    marginTop: "20px",
  },
  swiper: {
    marginTop: "20px",
  },
  swiperSlide: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px -4px 6px rgba(0, 0, 0, 0.1), 4px 0px 6px rgba(0, 0, 0, 0.1), -4px 0px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  cardImgContainer: {
    width: "100%",
    height: "250px",
    overflow: "hidden",
    borderRadius: "10px",
  },
  cardImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    padding: "10px",
    borderRadius: "10px",
  },
  cardContent: {
    padding: "15px",
    textAlign: "left",
  },
  cardTitle: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "10px",
  },
  cardDescription: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "15px",
    lineHeight: "1.4",
    fontWeight: "400",
    color: "#000000",
  },
  cardReadMore: {
    backgroundColor: "transparent",
    color: "#674121",
    border: "none",
    fontSize: "0.95rem",
    cursor: "pointer",
    textDecoration: "none",
  },
};
export default FoodAndDrinkSwiper;
