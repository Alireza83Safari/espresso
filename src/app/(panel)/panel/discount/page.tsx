import React from "react";
import CreateDiscount from "./components/CreateDiscount";
import DiscountTable from "./components/DiscountTable";
import { getDisounts } from "@/actions/getDiscounts";
import PageTitle from "../components/PageTitle";

export default async function page() {
  const discounts = await getDisounts();

  return (
    <>
      <PageTitle title="تخفیفات" />
      <CreateDiscount />
      <DiscountTable discounts={discounts} />
    </>
  );
}
