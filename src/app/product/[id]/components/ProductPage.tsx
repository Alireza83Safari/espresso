"use client";
import { ProductType } from "@/types/product";
import Image from "next/image";
import React, { useState } from "react";
import { FaTruck } from "react-icons/fa";
import ProductFooter from "./ProductFooter";
import { useCoffeePriceCalculator } from "@/hooks/useCoffePrice";
import { addToCart } from "@/app/actions/addToCart";
import { useSession } from "next-auth/react";

interface ProductPageProps {
  product: ProductType;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const { data: session } = useSession();
  const [weight, setWeight] = useState(250);
  const { calculatedPrice } = useCoffeePriceCalculator({
    price: product?.price,
    coffeeWeight: weight,
  });

  const { calculatedPrice: minPrice } = useCoffeePriceCalculator({
    price: product?.price,
    coffeeWeight: 250,
  });

  return (
    <div className="grid md:grid-cols-5 lg:mt-32 mt-40 mx-auto max-w-[1080px]">
      <div className="md:col-span-2 flex justify-center">
        <Image
          src={product?.image}
          width={500}
          height={500}
          alt={product?.name}
          className="object-contain min-w-full"
        />
      </div>
      <div className="md:col-span-3 flex justify-center text-center pb-12 md:mt-0 mt-10">
        <div className="max-w-[26rem md:px-12">
          <h1 className="xs:text-3xl text-xl text-textGray">{product?.name}</h1>
          <p className="xs:text-2xl text-lg mt-7 text-center">
            {minPrice?.toLocaleString()}تومان -{" "}
            {product?.price?.toLocaleString()}
            تومان
          </p>
          <p className="mt-4 text-lg">قهوه {product?.seedType}</p>
          <div className="flex justify-center mt-4">
            <FaTruck className="text-3xl mr-2 text-lime-600 ml-2" />
            <p className="xs:text-2xl text-lg text-lime-600 font-semibold">
              ارسال رایگان
            </p>
          </div>

          <div className="mt-12 xs:text-base text-sm">
            <div>
              <label htmlFor="c" className="block">
                نوع آسیاب
              </label>
              <select name="c" id="c" className="border w-full py-1 px-3">
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
                className="border w-full py-1 px-3"
                onChange={(e) => setWeight(+e.target.value)}
              >
                <option value={250}>250گرم</option>
                <option value={500}>500گرم</option>
                <option value={750}>750گرم</option>
                <option value={1000}>100گرم</option>
              </select>
            </div>
          </div>

          <div className="flex items-center mt-10">
            <p className="xs:text-2xl text-lg ml-4">{calculatedPrice}تومان</p>
            <button
              className="bg-green py-1 px-3 text-white rounded-sm"
              onClick={() =>
                addToCart({ product: product?._id, user: (session as any)?.id })
              }
            >
              افزودن به سبد خرید
            </button>
          </div>

          <div className="text-sm text-textGray mt-12">
            <div className="flex border-b border-gray-400 py-2">
              <p className="ml-1">شناسه محصول:</p>
              <p>نامعلوم</p>
            </div>

            <div className="flex mt-3 border-b border-gray-400 py-2">
              <p className="ml-1">دسته:</p>
              <p> برشته کاری درکاپی, قهوه, قهوه, قهوه تجاری</p>
            </div>

            <div className="flex mt-3 py-2">
              <p className="ml-1">برچسب:</p>
              <p>{product?.label}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-5">
        <ProductFooter product={product} />
      </div>
    </div>
  );
};

export default ProductPage;
