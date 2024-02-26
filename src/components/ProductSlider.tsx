"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { ProductType } from "@/types/product";
import Product from "./Product";

interface ProductSlider {
  title: string;
  products: ProductType[];
}

const ProductSlider: React.FC<ProductSlider> = ({ title, products }) => {
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
    1200: {
      slidesPerView: 5,
    },
  };
  return (
    <div className="m-auto max-w-[1080px] my-20">
      <div className="flex justify-center items-center mb-12">
        <b className="flex-1 bg-gray-200 h-[2px]"></b>
        <h1 className="text-xl px-4">{title}</h1>
        <b className="flex-1 bg-gray-200 h-[2px]"></b>
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
        {products?.map((product) => (
          <SwiperSlide>
            <Product product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
