import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
// Use style from styles
import "../styles/Hero.module.css";

const Hero = () => {
  const slides = ["https://via.placeholder.com/800x600?text=Slide+1", "https://via.placeholder.com/800x600?text=Slide+2", "https://via.placeholder.com/800x600?text=Slide+3"];

  return (
    <section className="hero">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="heroSwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <h1 className="hero__title">Welcome to My Portfolio</h1>
      <p className="hero__subtitle">Explore my work and discover my journey as a graphic artist.</p>
    </section>
  );
};

export default Hero;
