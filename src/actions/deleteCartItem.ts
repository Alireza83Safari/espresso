import { apiUrl } from "@/services/apiUrl";

export const deleteCartItem = async (userId: string) => {
  const res = await fetch(`${apiUrl}/api/cart/${userId}`, {
    cache: "no-store",
    method: "DELETE",
  });

  return res.status;
};
