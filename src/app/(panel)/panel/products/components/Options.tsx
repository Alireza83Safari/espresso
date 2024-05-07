import React from "react";
import { CoffeeType } from "@/types/coffee";

interface ProducsOptionsProps {
  coffees: CoffeeType[];
}

const CoffeesOptions: React.FC<ProducsOptionsProps> = ({ coffees }) => {
  const totalOrdersPrice =
    coffees?.length &&
    coffees?.reduce((total, order) => {
      return total + order?.price;
    }, 0);

  return (
    <div className="mb-12 grid gap-x-10 gap-y-8 xs:grid-cols-2 sm:gap-y-0">
      <div className="rounded-xl bg-slate-100 py-8 text-center shadow-xl duration-300 hover:shadow-md">
        <h2 className="text-xl md:text-2xl">مجموع محصولات</h2>
        <p className="pt-4 text-3xl font-black text-indigo-600 md:text-4xl">
          {coffees?.length}
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

export default CoffeesOptions;
