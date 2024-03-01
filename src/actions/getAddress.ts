import { apiUrl } from "@/services/apiUrl";

export const getAddress = async (id: string) => {
  if (id) {
    const res = await fetch(`${apiUrl}/api/address/${id}`, {
      next: { tags: ["address"] },
      cache: "no-cache",
    });

    const address = await res.json();
    return address;
  }
};
