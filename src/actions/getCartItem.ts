import { apiUrl } from "@/services/apiUrl";

export const getCartItem = async (userId: string) => {
  const res = await fetch(`${apiUrl}/api/cart/${userId}`, {
    cache: "no-store",
    next: {
      tags: ["product"],
    },
  });
  const cartItem = await res.json();

  return cartItem;
};
