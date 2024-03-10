"use client";
import { productCategory } from "@/constants/constants";
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
    <section className="m-auto max-w-[1080px] gap-y-8">
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
            <div className="relative m-auto flex h-[150px] w-[150px] justify-center overflow-hidden rounded-3xl">
              <div
                className="flex h-full w-full transform items-center justify-center bg-cover bg-center transition-transform duration-[3000ms] hover:scale-150"
                style={{ backgroundImage: `url(${category?.image})` }}
                key={category?.id}
              >
                <p className="text-sm text-white">{category?.titel}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default page;
