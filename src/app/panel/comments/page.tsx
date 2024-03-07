import React from "react";
import { getComments } from "@/actions/getComments";
import CommentsTable from "./components/CommentsTable";

export const revalidate = 60 * 60;

export default async function page() {
  const comments = await getComments();
  return <CommentsTable comments={comments} />;
}
