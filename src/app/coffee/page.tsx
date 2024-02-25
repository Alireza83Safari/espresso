import React from "react";
import { getCoffeees } from "../actions/getCoffees";
import Coffee from "@/components/Coffee";
import { CoffeeType } from "../types/coffee";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilterCoffee from "./components/FilterCoffee";

export default async function page({
  searchParams,
}: {
  searchParams: { order: any };
}) {
  const coffees = await getCoffeees(
    searchParams?.order.length ? `?order=${searchParams.order}` : ""
  );
  return (
    <>
      <Header />
      <div className=" lg:mt-32 mt-40 mx-auto max-w-[1080px] mb-16">
        <FilterCoffee />
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1">
          {coffees?.map((coffee: CoffeeType) => (
            <Coffee coffee={coffee} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
