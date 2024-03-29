"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const FilterProduct = () => {
  const [selectedFilter, updateSelectedFilter] = useState("");
  const searchParams = useSearchParams();
  const { push: navigateTo } = useRouter();

  useEffect(() => {
    const queryParams = new URLSearchParams(searchParams.toString());

    const page = queryParams.get("page");
    if (selectedFilter) {
      queryParams.set("order", selectedFilter);
      navigateTo(`?${queryParams.toString()}&page=${!!page ? page : 1}`);
    } else {
      queryParams.delete("order");
      navigateTo(`?${queryParams.toString()}`);
    }
  }, [selectedFilter]);

  return (
    <select
      className="border px-10 outline-none"
      onChange={(e) => updateSelectedFilter(e.target.value)}
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
