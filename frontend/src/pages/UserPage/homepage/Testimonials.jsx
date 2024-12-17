import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

import first from "../../../assets/img/org.jpg";
import second from "../../../assets/img/mandavlogger.jpg";
import third from "../../../assets/img/donyadv.jpg";
import fourth from "../../../assets/img/aisyahvlog.jpg";
import fifth from "../../../assets/img/damaentre.jpeg";
import sixth from "../../../assets/img/regaadv.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aulia Youtuber",
      role: "Youtuber",
      image: first,
      rating: "⭐⭐⭐⭐⭐",
      text: "Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers.",
    },
    {
      name: "Manda Vlogger",
      role: "Vlogger",
      image: second,
      rating: "⭐⭐⭐⭐⭐",
      text: "Creates memorable itineraries, and shares authentic experiences with his audience. His journeys are now smoother, more organized, and enriched by the convenience.",
    },
    {
      name: "Dony",
      role: "Adventurer",
      image: third,
      rating: "⭐⭐⭐⭐⭐",
      text: "As an avid adventurer, users of this app can discover hidden gems, plan thrilling expeditions, and stay organized on the go making every trip an unforgettable experience.",
    },
    {
      name: "Aisyah Vlogger",
      role: "Vlogger",
      image: fourth,
      rating: "⭐⭐⭐⭐⭐",
      text: "Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers.",
    },
    {
      name: "Dama",
      role: "Entrepreneur",
      image: fifth,
      rating: "⭐⭐⭐⭐⭐",
      text: "Creates memorable itineraries, and shares authentic experiences with his audience. His journeys are now smoother, more organized, and enriched by the convenience.",
    },
    {
      name: "Rega",
      role: "Adventurer",
      image: sixth,
      rating: "⭐⭐⭐⭐⭐",
      text: "As an avid adventurer, users of this app can discover hidden gems, plan thrilling expeditions, and stay organized on the go making every trip an unforgettable experience.",
    },
  ];

  return (
    <section className="cust-exp-hp text-center my-3">
      <div className="container">
        <h1 className="txt-choice">
          Our Customer <span className="txt-pkg">Experience</span>
        </h1>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="card rounded-4 shadow-sm">
                <div className="card-bodycust">
                  <img src={testimonial.image} className="rounded-circle mt-4 mb-4" alt={`${testimonial.name} Profile`} />
                  <h5 className="card-title-cust mb-1">{testimonial.name}</h5>
                  <p className="card-text-cust mb-0">{testimonial.role}</p>
                  <label className="form-check-label mb-2">{testimonial.rating}</label>
                  <p className="card-text-cust2 mb-4 px-4">{testimonial.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
