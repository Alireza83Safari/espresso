"use client";
import { Pagination } from "@/components";
import Product from "@/components/Product";
import { ProductType } from "@/types/product";
import React, { useState } from "react";

type ProductsPageProps = {
  products: ProductType[];
};

const ProductsPage: React.FC<ProductsPageProps> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const startIndex = (currentPage - 1) * limit;
  const endIndex = currentPage * limit;
  const displayedProducts = products.slice(startIndex, endIndex);
  const totalPages = Math.ceil(products.length / limit);

  return (
    <>
      {!!products?.length ? (
        <>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {displayedProducts?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          )}
        </>
      ) : (
        <h1 className="my-52 text-center text-3xl text-green sm:text-4xl">
          محصولی یافت نشد
        </h1>
      )}
    </>
  );
};

export default ProductsPage;
