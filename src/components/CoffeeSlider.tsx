"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Coffee from "./Coffee";

const CoffeeSlider = () => {
  const breakpoints = {
    1: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  };
  return (
    <div className="m-auto max-w-[1080px] my-20">
      <div className="flex justify-center items-center">
        <b className="flex-1 bg-gray-200 h-[2px]"></b>
        <h1 className="text-xl px-4">قهوه های ترکیبی</h1>
        <b className="flex-1 bg-gray-200 h-[2px]"></b>
      </div>

      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop
        className="mySwiper"
        breakpoints={breakpoints}
      >
        <SwiperSlide>
          <Coffee />
        </SwiperSlide>
        <SwiperSlide>
          <Coffee />
        </SwiperSlide>
        <SwiperSlide>
          <Coffee />
        </SwiperSlide>
        <SwiperSlide>
          <Coffee />
        </SwiperSlide>
        <SwiperSlide>
          <Coffee />
        </SwiperSlide>
        <SwiperSlide>
          <Coffee />
        </SwiperSlide>
        <SwiperSlide>
          <Coffee />
        </SwiperSlide>
        <SwiperSlide>
          <Coffee />
        </SwiperSlide>
        <SwiperSlide>
          <Coffee />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CoffeeSlider;
