"use client";
import React from "react";
import { addToCart } from "@/actions/addToCart";
import { ProductType } from "@/types/product";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  product: ProductType;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const { data: session } = useSession();

  return (
    <div className="border-l border-gray-200 text-center my-5">
      <div className="text-center">
        <div className="flex justify-center group relative">
          <Link href={`/product/${product?._id}`}>
            <Image
              width={300}
              height={300}
              alt="Product"
              src={product?.image}
              className="transition-transform ease-in-out duration-1000 transform-gpu hover:scale-75"
            />
          </Link>

          <div
            className="absolute bottom-0 right-0 left-0 bg-green text-white w-full py-2 text-sm group-hover:block hidden cursor-pointer"
            onClick={() =>
              addToCart({ product: product?._id, user: (session as any)?.id })
            }
          >
            افزودن به سبد خرید
          </div>
        </div>
        <Link href={`/product/${product?._id}`}>
          <h1 className="px-1 truncate text-nowrap">{product?.name}</h1>
          <p className="mt-3">{product?.price?.toLocaleString()}</p>
        </Link>
      </div>
    </div>
  );
};

export default Product;
