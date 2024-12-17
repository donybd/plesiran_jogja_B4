import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/bundle";
import "swiper/css/navigation";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const ListDestination = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const URL = import.meta.env.VITE_BE_API;
  const navigate = useNavigate(); // Menggunakan useNavigate

  // Mengambil data destinasi dari API
  useEffect(() => {
    async function fetchDestinations() {
      try {
        const response = await fetch(URL + "discover/dest");
        if (!response.ok) {
          throw new Error("Failed to fetch destinations");
        }
        const result = await response.json();
        setDestinations(result.data); // Menyimpan data destinasi
      } catch (error) {
        setError("Gagal memuat destinasi. Silakan coba lagi nanti.");
        console.error("Error fetching destinations:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDestinations();
  }, [URL]);

  const handleDetailClick = (destination) => {
    // Mengarahkan ke halaman detail destinasi dengan membawa data destinasi
    navigate("/discover/detail-destination", {
      state: { destination: destination }, // Mengirimkan data destinasi
    });
  };

  // Fungsi untuk merender slide destinasi
  const renderSlides = (slides) => {
    if (!slides || slides.length === 0) {
      return <p>Destination Not Found</p>;
    }
    return slides.map((slide, index) => (
      <SwiperSlide key={index} className="tranding-slide">
        <div className="tranding-slide-img">
          <img src={`../../../img/${slide.image_destination}`} alt={slide.name_dest} />
        </div>
        <div className="tranding-slide-title">
          <h5 onClick={() => handleDetailClick(slide)}>{slide.name_dest}</h5> {/* Menggunakan handleDetailClick untuk mengirim data destinasi */}
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

  // Memfilter destinasi berdasarkan kategori
  const filteredDestinations = {
    beach: destinations.filter((destination) => destination.nama_category === "Beach"),
    temple: destinations.filter((destination) => destination.nama_category === "Temple"),
    highLand: destinations.filter((destination) => destination.nama_category === "Highland"),
  };

  return (
    <section className="list">
      {["beach", "temple", "highLand"].map((category) => (
        <div key={category} className="container mt-3">
          <h2 className="judul-list mb-5">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <Swiper
            modules={[Navigation, EffectCoverflow]}
            centeredSlides={true}
            spaceBetween={50}
            effect="coverflow"
            grabCursor={true}
            loop={true}
            slidesPerView="auto"
            coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            navigation={true}
            className="tranding-slider"
            style={{ marginBottom: "60px" }}
          >
            {renderSlides(filteredDestinations[category])}
          </Swiper>
        </div>
      ))}
    </section>
  );
};

export default ListDestination;
