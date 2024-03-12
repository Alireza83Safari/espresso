import React from "react";
import CreateDiscount from "./components/CreateDiscount";
import DiscountTable from "./components/DiscountTable";
import { getDisounts } from "@/actions/getDiscounts";

export default async function page() {
  const discounts = await getDisounts();
  return (
    <>
      <CreateDiscount />
      <DiscountTable discounts={discounts} />
    </>
  );
}
