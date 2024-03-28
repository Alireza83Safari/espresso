"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const FilterProduct = () => {
  const [selectedOrder, setSelectedOrder] = useState("");
  const { push: navigateTo } = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryParams = new URLSearchParams(searchParams.toString());
    const page = queryParams.get("page");

    if (selectedOrder) {
      queryParams.set("order", selectedOrder);
      navigateTo(`?${queryParams.toString()}&page=${!!page ? page : 1}`);
    } else {
      queryParams.delete("order");
      navigateTo(`?${queryParams.toString()}`);
    }
  }, [selectedOrder]);

  return (
    <select
      className="rounded-lg border px-7 py-1 outline-none"
      onChange={(e) => setSelectedOrder(e.target.value)}
    >
      <option value="">فیلتر بر اساس</option>
      <option value="expensive">گران ترین</option>
      <option value="cheap">ارزان ترین</option>
      <option value="mix">میکس</option>
      <option value="pure">خالص</option>
      <option value="newset">جدیدترین</option>
      <option value="oldest">قدیمی ترین</option>
    </select>
  );
};

export default FilterProduct;
