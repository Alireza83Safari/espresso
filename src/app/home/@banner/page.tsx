"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <Swiper
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{
        clickable: true,
      }}
      loop
      autoplay={{
        delay: 1000,
      }}
    >
      <SwiperSlide>
        <div className="transition-transform transform-gpu hover:scale-110 duration-300 bg-banner-1 bg-center bg-cover h-[24rem] justify-center items-center -z-10 lg:mt-[92px] mt-[137px] flex">
          <div className="text-white text-center mb-8">
            <p className="md:text-[3.6rem] text-[2.4rem] font-bold">شروع روز خوب</p>
            <p className="md:text-[3.6rem] text-[2.4rem] font-bold mt-5">با یک قهوه خوب</p>
            <button className="border-2 border-white py-3 px-10 text-lg font-semibold hover:bg-white duration-300 hover:text-green rounded-3xl mt-12">
              مشاهده محصولات
            </button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="transition-transform transform-gpu hover:scale-110 duration-300 flex items-center relative">
          <div className="absolute top-0 right-0 left-0 bg-banner-2 bg-center bg-cover lg:mt-[93px] mt-[140px] lg:min-h-[24rem] sm:flex items-center">
            <div className="text-white mb-8 lg::pr-16 md:pr-10 sm:pr-4 mt-8">
              <p className="lg:text-[3.3rem] sm:text-[2.2rem] text-[1.7rem] font-bold">
                برشته کاری قهوه باکسولنت
              </p>
              <p className="text-sm font-light mt-5">
                قهوه ای که به شما انرژی و هیجان میدهد
              </p>
              <button className="border-2 border-white md:py-3 py-2 md:px-10 px-4 md:text-lg font-semibold hover:bg-white duration-300 hover:text-green rounded-3xl mt-12">
                مشاهده محصولات باکسولنت
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
