import React from "react";
import { getComments } from "@/actions/getComments";
import CommentsTable from "./components/CommentsTable";

export default async function page() {
  const comments = await getComments();
  return (
    <div>
      <CommentsTable comments={comments} />
    </div>
  );
}
