import React from "react";
import UsersTable from "./components/UserTable";
import { getUsers } from "@/actions/getUsers";
import CreateUser from "./components/CreateUser";

export default async function page() {
  const users = await getUsers();
  return (
    <>
      <CreateUser />
      <UsersTable users={users} />
    </>
  );
}
