"use client";
import { productCategory } from "@/app/constants/constants";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const page = () => {
  const breakpoints = {
    1: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    460: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  };
  return (
    <div className="m-auto max-w-[1080px] gap-y-8">
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
        {productCategory?.map((category) => (
          <SwiperSlide>
            <div className="relative h-[150px] w-[150px] rounded-3xl overflow-hidden m-auto flex justify-center">
              <div
                className="h-full w-full bg-cover bg-center transition-transform transform hover:scale-150 duration-[3000ms] flex justify-center items-center"
                style={{ backgroundImage: `url(${category?.image})` }}
                key={category?.id}
              >
                <p className="text-white text-sm">{category?.titel}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default page;
