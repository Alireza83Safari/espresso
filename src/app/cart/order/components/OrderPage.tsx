"use client";
import React, { useState } from "react";
import { AddressType } from "@/types/address";
import getCartItem from "@/actions/getCartItem";
import Addresses from "./Addresses";
import OrderDetails from "./OrderDetails";
import OrderProducts from "./OrderProducts";

interface OrderPageProps {
  address: AddressType[];
  userId: string;
}

const OrderPage: React.FC<OrderPageProps> = ({ address }) => {
  const [chooseAddress, setChooseAddress] = useState("");
  const { cart } = getCartItem();

  return (
    <section className="grid grid-cols-1 lg:grid-cols-4">
      <div className="col-span-3">
        <Addresses
          setChooseAddress={setChooseAddress}
          chooseAddress={chooseAddress}
          address={address}
        />

        <OrderProducts cart={cart} />
      </div>
      <OrderDetails cart={cart} chooseAddress={chooseAddress} />
    </section>
  );
};

export default OrderPage;
