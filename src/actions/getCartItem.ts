import { apiUrl } from "@/services/apiUrl";

export const getCartItem = async (userId: string) => {
  if (userId) {
    const res = await fetch(`${apiUrl}/api/cart/${userId}`, {
      cache: "no-store",
      next: {
        tags: ["cart"],
      },
    });
    const cartItem = await res.json();

    return cartItem;
  }
};
