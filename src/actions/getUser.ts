import { apiUrl } from "@/services/apiUrl";

export const getUser = async (id: string) => {
  const res = await fetch(`${apiUrl}/api/user/${id}`, {
    next: {
      tags: ["user"],
    },
  });

  const users = await res.json();
  return users;
};
