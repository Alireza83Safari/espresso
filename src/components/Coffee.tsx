import Image from "next/image";
import React from "react";

const Coffee = () => {
  return (
    <div className="border-l border-gray-200 text-center">
      <div className="flex justify-center">
        <Image
          width={300}
          height={300}
          alt="coffee"
          src="/image/coffee.png"
        />
      </div>
      <h1 className="text-lg">قهوه ترکیبی ۱۰۰ عربیکا </h1>
      <p className="mt-3">700,000</p>
    </div>
  );
};

export default Coffee;
