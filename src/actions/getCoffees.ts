import { apiUrl } from "@/services/apiUrl";

export const getCoffees = async (q?: string) => {
  const res = await fetch(`${apiUrl}api/coffee${q?.length ? q : ""}`, {
    next: { tags: ["coffees"] },
  });

  const coffees = await res.json();

  return coffees;
};
