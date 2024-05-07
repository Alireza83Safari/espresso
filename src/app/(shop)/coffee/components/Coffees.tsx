"use client";
import { Pagination } from "@/components";
import Coffee from "@/components/Coffee";
import { CoffeeType } from "@/types/coffee";
import React, { useState } from "react";

type CoffeesProps = {
  coffees: CoffeeType[];
};

const Coffees: React.FC<CoffeesProps> = ({ coffees }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12;
  const startIndex = (currentPage - 1) * limit;
  const endIndex = currentPage * limit;
  const displayedCoffees = coffees.slice(startIndex, endIndex);
  const totalPages = Math.ceil(coffees.length / limit);

  return (
    <>
      {!!coffees?.length ? (
        <>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {displayedCoffees?.map((coffee) => (
              <Coffee key={coffee._id} coffee={coffee} />
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

export default Coffees;
