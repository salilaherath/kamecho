import Hero1 from "../assets/Hero1.jpg";
import Hero2 from "../assets/Hero2.jpg";
import Hero3 from "../assets/Hero3.jpg";
import Hero4 from "../assets/Hero4.jpg";
import Hero5 from "../assets/Hero5.jpg";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Hero = () => {
  return (
    <div className="relative w-full h-[30vh] md:h-[50vh] xl:h-[80vh]" id="hero">
      <div className="absolute top-[40%] left-0 z-10 w-full text-center">
        <h1 className="text-lg text-white font-semibold drop-shadow-md md:text-4xl xl:text-4xl">
          Welcome to
        </h1>
        <h1 className="text-2xl text-white font-semibold drop-shadow-md md:text-5xl xl:text-6xl">
          KAMEcho Solutions!
        </h1>
      </div>

      <Swiper
        pagination={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesOffsetAfter={0}
        modules={[Autoplay, Pagination]}
        className="mySwiper h-[30vh] md:h-[50vh] xl:h-[80vh]"
      >
        <SwiperSlide>
          <img
            className="object-cover object-center"
            src={Hero1}
            alt="Hero Image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover object-center"
            src={Hero2}
            alt="Hero Image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover object-center"
            src={Hero3}
            alt="Hero Image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover object-center"
            src={Hero4}
            alt="Hero Image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover object-center"
            src={Hero5}
            alt="Hero Image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
