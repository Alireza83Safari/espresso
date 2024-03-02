import { apiUrl } from "@/services/apiUrl";

export const getComments = async () => {
  const res = await fetch(`${apiUrl}/api/comment`, {
    cache: "no-store",
    next: {
      tags: ["comment"],
    },
  });

  const comments = await res.json();
  return comments;
};
