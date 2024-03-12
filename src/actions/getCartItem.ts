"use client";
import React, { useEffect, useState } from "react";
import { CartType } from "@/types/cart";

const getCartItem = () => {
  const [cart, setCart] = useState() as any;
  const [isLoading, setLoading] = useState(false);

  const getCart = () => {
    setLoading(true);
    const localCart: CartType[] = JSON.parse(
      localStorage.getItem("cart") as any,
    );
    if (localCart?.length) {
      setLoading(false);
      setCart(localCart);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCart();
  }, []);

  return { cart, getCart, isLoading };
};

export default getCartItem;
