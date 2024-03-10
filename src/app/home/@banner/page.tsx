"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

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
        <Link
          href="/product"
          className="-z-10 mt-[137px] flex h-[24rem] transform-gpu items-center justify-center bg-banner-1 bg-cover bg-center transition-transform duration-300 hover:scale-110 lg:mt-[92px]"
        >
          <div className="mb-8 text-center text-white">
            <p className="text-[2.4rem] font-bold md:text-[3.6rem]">
              شروع روز خوب
            </p>
            <p className="mt-5 text-[2.4rem] font-bold md:text-[3.6rem]">
              با یک قهوه خوب
            </p>
            <button className="mt-12 rounded-3xl border-2 border-white px-10 py-3 text-lg font-semibold duration-300 hover:bg-white hover:text-green">
              مشاهده محصولات
            </button>
          </div>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link
          href={"/product?q=باکسونت"}
          className="relative flex transform-gpu items-center transition-transform duration-300 hover:scale-110"
        >
          <div className="absolute left-0 right-0 top-0 mt-[140px] items-center bg-banner-2 bg-cover bg-center sm:flex lg:mt-[93px] lg:min-h-[24rem]">
            <div className="lg::pr-16 mb-8 mt-8 text-white sm:pr-4 md:pr-10">
              <p className="text-[1.7rem] font-bold sm:text-[2.2rem] lg:text-[3.3rem]">
                برشته کاری قهوه باکسولنت
              </p>
              <p className="mt-5 text-sm font-light">
                قهوه ای که به شما انرژی و هیجان میدهد
              </p>
              <button className="mt-12 rounded-3xl border-2 border-white px-4 py-2 font-semibold duration-300 hover:bg-white hover:text-green md:px-10 md:py-3 md:text-lg">
                مشاهده محصولات باکسولنت
              </button>
            </div>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
