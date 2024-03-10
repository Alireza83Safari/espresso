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
    <div className="my-5 border-l border-gray-200 text-center">
      <div className="text-center">
        <div className="group relative flex justify-center">
          <Link href={`/product/${product?._id}`}>
            <Image
              width={300}
              height={300}
              alt="Product"
              src={product?.image}
              className="transform-gpu transition-transform duration-1000 ease-in-out hover:scale-75"
            />
          </Link>

          <div
            className="absolute bottom-0 left-0 right-0 hidden w-full cursor-pointer bg-green py-2 text-sm text-white group-hover:block"
            onClick={() =>
              addToCart({ product: product?._id, user: (session as any)?.id })
            }
          >
            افزودن به سبد خرید
          </div>
        </div>
        <Link href={`/product/${product?._id}`}>
          <h1 className="truncate text-nowrap px-1">{product?.name}</h1>
          <p className="mt-3">{product?.price?.toLocaleString()}</p>
        </Link>
      </div>
    </div>
  );
};

export default Product;
