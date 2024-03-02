import { apiUrl } from "@/services/apiUrl";

export const getUsers = async () => {
  const res = await fetch(`${apiUrl}/api/user`, {
    next: {
      tags: ["users"],
    },
  });

  const users = await res.json();
  return users;
};
