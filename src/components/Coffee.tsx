import { CoffeeType } from "@/app/types/coffee";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CoffeeProps {
  coffee: CoffeeType;
}

const Coffee: React.FC<CoffeeProps> = ({ coffee }) => {
  return (
    <div className="border-l border-gray-200 text-center">
      <Link href={`/coffee/${coffee?._id}`} className="text-center">
        <div className="flex justify-center group relative">
          <Image
            width={300}
            height={300}
            alt="coffee"
            src={coffee?.image}
            className="transition-transform ease-in-out duration-1000 transform-gpu hover:scale-75"
          />
          <div className="absolute bottom-0 right-0 left-0 bg-green text-white w-full py-2 text-sm group-hover:block hidden cursor-pointer">
            افزودن به سبد خرید
          </div>
        </div>
        <h1 className="px-1 truncate text-nowrap">{coffee?.name}</h1>
        <p className="mt-3">{coffee?.price?.toLocaleString()}</p>
      </Link>
    </div>
  );
};

export default Coffee;
