import React from "react";
import { ProductType } from "@/types/product";

interface ProducsOptionsProps {
  products: ProductType[];
}

const ProductsOptions: React.FC<ProducsOptionsProps> = ({ products }) => {
  const totalOrdersPrice = products?.reduce((total, order) => {
    return total + order?.price;
  }, 0);

  return (
    <div className="mb-12 grid gap-x-10 gap-y-8 xs:grid-cols-2 sm:gap-y-0">
      <div className="rounded-xl bg-slate-100 py-8 text-center shadow-xl duration-300 hover:shadow-md">
        <h2 className="text-xl md:text-2xl">مجموع محصولات</h2>
        <p className="pt-4 text-3xl font-black text-indigo-600 md:text-4xl">
          {products?.length}
        </p>
      </div>
      <div className="rounded-xl bg-slate-100 py-8 text-center shadow-xl duration-300 hover:shadow-md">
        <h2 className="text-xl md:text-2xl">مجموع ارزش</h2>
        <p className="pt-4 text-3xl font-black text-indigo-600 md:text-4xl">
          {totalOrdersPrice?.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ProductsOptions;
