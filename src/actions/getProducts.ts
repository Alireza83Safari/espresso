import { apiUrl } from "@/services/apiUrl";

export const getProducts = async (q?: string) => {
  const res = await fetch(`${apiUrl}/api/product${q?.length ? q : ""}`, {
    next: { tags: ["products"] },
  });

  const products = await res.json();
  return products;
};
