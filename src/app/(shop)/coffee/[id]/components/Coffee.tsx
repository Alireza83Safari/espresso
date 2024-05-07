"use client";
import React, { useState } from "react";
import { CoffeeType } from "@/types/coffee";
import Image from "next/image";
import { FaTruck } from "react-icons/fa";
import CoffeeFooter from "./CoffeeFooter";
import { useCoffeePriceCalculator } from "@/hooks/useCoffePrice";
import { addToCart } from "@/actions/addToCart";

interface CoffeeProps {
  coffee: CoffeeType;
}

const Coffee: React.FC<CoffeeProps> = ({ coffee }) => {
  const [weight, setWeight] = useState(250);
  const { calculatedPrice } = useCoffeePriceCalculator({
    price: coffee?.price,
    coffeeWeight: weight,
  });

  const { calculatedPrice: minPrice } = useCoffeePriceCalculator({
    price: coffee?.price,
    coffeeWeight: 250,
  });

  return (
    <div className="mx-auto mt-40 grid max-w-[1080px] md:grid-cols-5 lg:mt-32">
      <div className="flex justify-center md:col-span-2">
        <Image
          src={coffee?.image}
          width={500}
          height={500}
          alt={coffee?.name}
          className="min-w-full object-contain"
        />
      </div>
      <div className="mt-10 flex justify-center pb-12 text-center md:col-span-3 md:mt-0">
        <div className="max-w-[26rem md:px-12">
          <h1 className="text-xl text-textGray xs:text-3xl">{coffee?.name}</h1>
          <p className="mt-7 text-center text-lg xs:text-2xl">
            {minPrice?.toLocaleString()}تومان -{" "}
            {coffee?.price?.toLocaleString()}
            تومان
          </p>
          <p className="mt-4 text-lg">قهوه {coffee?.seedType}</p>
          <div className="mt-4 flex justify-center text-lime-600">
            <FaTruck className="ml-2 mr-2 text-3xl" />
            <p className="text-lg font-semibold xs:text-2xl">ارسال رایگان</p>
          </div>

          <div className="mt-12 text-sm xs:text-base">
            <div>
              <label htmlFor="c" className="block">
                نوع آسیاب
              </label>
              <select name="c" id="c" className="w-full border px-3 py-1">
                <option value="">بدون آسیاب</option>
                <option value="">اسپرسو خانگی</option>
                <option value="">دمی</option>
                <option value="">صنعتی</option>
                <option value="">فرنچ پرس</option>
                <option value="">موکوپات</option>
              </select>
            </div>

            <div className="mt-5">
              <label htmlFor="c" className="block">
                وزن
              </label>
              <select
                className="w-full border px-3 py-1"
                onChange={(e) => setWeight(+e.target.value)}
              >
                <option value={250}>250گرم</option>
                <option value={500}>500گرم</option>
                <option value={750}>750گرم</option>
                <option value={1000}>100گرم</option>
              </select>
            </div>
          </div>

          <div className="mt-10 flex items-center">
            <p className="ml-4 text-lg xs:text-2xl">{calculatedPrice}تومان</p>
            <button
              className="rounded-sm bg-green px-3 py-1 text-white"
              onClick={() => addToCart(coffee, 1)}
            >
              افزودن به سبد خرید
            </button>
          </div>

          <div className="mt-12 text-sm text-textGray">
            <div className="flex border-b border-gray-400 py-2">
              <p className="ml-1">شناسه محصول:</p>
              <p>نامعلوم</p>
            </div>

            <div className="mt-3 flex border-b border-gray-400 py-2">
              <p className="ml-1">دسته:</p>
              <p> برشته کاری درکاپی, قهوه, قهوه, قهوه تجاری</p>
            </div>

            <div className="mt-3 flex py-2">
              <p className="ml-1">برچسب:</p>
              <p>{coffee?.label}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-5">
        <CoffeeFooter coffee={coffee} />
      </div>
    </div>
  );
};

export default Coffee;
