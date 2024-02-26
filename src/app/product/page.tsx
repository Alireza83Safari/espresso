import React from "react";
import { ProductType } from "../../types/product";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilterProduct from "./components/FilterProduct";
import { getProducts } from "../actions/getProducts";
import Product from "@/components/Product";

export default async function page({ searchParams }: any) {
  const { order, q } = searchParams;
  let APIURL = `?`;
  if (order) APIURL += `order=${order}&`;
  if (q) APIURL += `q=${q}&`;

  const products = await getProducts(APIURL.length > 2 ? APIURL : "");

  return (
    <>
      <Header />
      <div className=" lg:mt-32 mt-40 mx-auto max-w-[1080px] mb-16">
        <FilterProduct />
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1">
          {products?.map((product: ProductType) => (
            <Product product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
