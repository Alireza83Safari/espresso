import { apiUrl } from "@/services/apiUrl";

export const getProduct = async (id?: string) => {
  const res = await fetch(`${apiUrl}/api/product/${id}`, {
    next: { tags: ["product"] },
    cache: "no-cache",
  });

  const products = await res.json();

  return products;
};
