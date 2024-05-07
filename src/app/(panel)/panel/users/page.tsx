import React from "react";
import UsersTable from "./components/UserTable";
import { getUsers } from "@/actions/getUsers";
import CreateUser from "./components/CreateUser";
import PageTitle from "../components/PageTitle";

export default async function page() {
  const users = await getUsers();
  return (
    <>
      <PageTitle title="کاربران" />
      <CreateUser />
      <UsersTable users={users} />
    </>
  );
}
