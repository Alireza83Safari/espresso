"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { CoffeeType } from "@/types/coffee";
import Coffee from "./Coffee";

interface CoffeeSliderProps {
  title: string;
  coffees: CoffeeType[];
}

const CoffeeSlider: React.FC<CoffeeSliderProps> = ({ title, coffees }) => {
  const breakpoints = {
    1: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
  };
  return (
    <div className="m-auto my-20 max-w-[1080px]">
      <div className="mb-12 flex items-center justify-center">
        <b className="h-[2px] flex-1 bg-gray-200"></b>
        <h1 className="px-4 text-xl">{title}</h1>
        <b className="h-[2px] flex-1 bg-gray-200"></b>
      </div>

      <Swiper
        slidesPerView={5}
        pagination={{
          clickable: true,
        }}
        loop
        className="mySwiper"
        breakpoints={breakpoints}
      >
        {!!coffees?.length &&
          coffees.map((coffee) => (
            <SwiperSlide>
              <Coffee coffee={coffee} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default CoffeeSlider;
