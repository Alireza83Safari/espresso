"use client";
import { ErrorTemplate } from "@/components";

export default function Error({ reset }: { reset: () => void }) {
  return <ErrorTemplate reset={reset} />;
}
