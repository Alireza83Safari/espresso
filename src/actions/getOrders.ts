import { apiUrl } from "@/services/apiUrl";

export const getOrders = async (id?: string) => {
  const res = await fetch(`${apiUrl}/api/order/${id ? `id` : ""}`, {
    next: { tags: ["order"] },
    cache: "no-cache",
  });

  const address = await res.json();
  return address;
};
