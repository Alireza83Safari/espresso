import { apiUrl } from "@/services/apiUrl";

export const getUsers = async () => {
  const res = await fetch(`${apiUrl}/api/user`, {
    cache: "no-store",
    next: {
      tags: ["user"],
    },
  });

  const users = await res.json();
  return users;
};
