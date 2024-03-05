"use server";
import { getUser } from "@/actions/getUser";

const isAdmin = async (id: string) => {
  var isAdminBool = false;
  const findUser = await getUser(id);
  if (id?.length) {
    isAdminBool = findUser?.role === "ADMIN";
  } else {
    isAdminBool = false;
  }
  return { isAdminBool };
};

export default isAdmin;
