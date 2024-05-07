"use client";
import React from "react";
import { CoffeeType } from "@/types/coffee";
import Image from "next/image";
import Link from "next/link";
import { addToCart } from "@/actions/addToCart";

interface CoffeProps {
  coffee: CoffeeType;
}

const Coffee: React.FC<CoffeProps> = ({ coffee }) => {
  return (
    <div
      className="mx-3 my-5 rounded-lg border-gray-200 py-3 text-center"
      style={{ boxShadow: "0 0 14px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="text-center">
        <div className="group relative flex justify-center">
          <Link href={`/coffee/${coffee?._id}`}>
            <Image
              width={300}
              height={300}
              alt="coffee"
              src={coffee?.image}
              className="transform-gpu transition-transform duration-1000 ease-in-out hover:scale-75"
            />
          </Link>

          <div
            className="absolute bottom-0 left-0 right-0 hidden w-full cursor-pointer bg-green py-3 text-sm text-white group-hover:block"
            onClick={() => addToCart(coffee, 1)}
          >
            افزودن به سبد خرید
          </div>
        </div>
        <Link href={`/coffee/${coffee?._id}`} className="block p-2">
          <h1 className="truncate text-nowrap px-1">{coffee?.name}</h1>
          <p className="mt-3">{coffee?.price?.toLocaleString()}</p>
        </Link>
      </div>
    </div>
  );
};

export default Coffee;
