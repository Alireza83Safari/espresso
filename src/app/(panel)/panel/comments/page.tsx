import React from "react";
import { getComments } from "@/actions/getComments";
import CommentsTable from "./components/CommentsTable";
import PageTitle from "../components/PageTitle";

export const revalidate = 60 * 60;

export default async function page() {
  const comments = await getComments();
  return (
    <>
      <PageTitle title="نظرات" />
      <CommentsTable comments={comments} />;
    </>
  );
}
