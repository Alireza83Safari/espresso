import { apiUrl } from "@/services/apiUrl";

export const getDisounts = async () => {
  const res = await fetch(`${apiUrl}/api/discount`, {
    next: {
      tags: ["discounts"],
    },
  });
  const discounts = await res.json();
  return discounts;
};
