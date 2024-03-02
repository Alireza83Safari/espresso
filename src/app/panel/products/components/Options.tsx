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
    <div className="grid sm:grid-cols-2 sm:mx-10 mx-2 mb-12 gap-x-10 sm:gap-y-0 gap-y-8">
      <div className="text-center shadow-xl bg-slate-50 py-8 rounded-xl">
        <h2 className="md:text-2xl text-xl">مجموع محصولات</h2>
        <p className="pt-4 md:text-4xl text-3xl font-black text-indigo-600">
          {products?.length}
        </p>
      </div>
      <div className="text-center shadow-xl bg-slate-50 py-8 rounded-xl">
        <h2 className="md:text-2xl text-xl">مجموع ارزش</h2>
        <p className="pt-4 md:text-4xl text-3xl font-black text-indigo-600">
          {totalOrdersPrice?.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ProductsOptions;
