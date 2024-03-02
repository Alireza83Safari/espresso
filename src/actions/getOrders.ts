import { apiUrl } from "@/services/apiUrl";

export const getOrders = async (id?: string) => {
  const res = await fetch(`${apiUrl}/api/order/${id ? `id` : ""}`, {
    next: { tags: ["order"] },
  });

  const address = await res.json();
  return address;
};
