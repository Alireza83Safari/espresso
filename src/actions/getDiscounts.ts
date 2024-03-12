import { apiUrl } from "@/services/apiUrl";

export const getDisounts = async () => {
  const res = await fetch(`${apiUrl}/api/discount`, {
    cache: "no-store",
  });
  const discounts = await res.json();
  return discounts;
};
