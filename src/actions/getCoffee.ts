import { apiUrl } from "@/services/apiUrl";

export const getCoffee = async (id?: string) => {
  const res = await fetch(`${apiUrl}/api/coffee/${id}`, {
    next: { tags: ["coffee"] },
    cache: "no-cache",
  });

  const coffee = await res.json();
  return coffee;
};
