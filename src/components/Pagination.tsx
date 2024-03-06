// components/Pagination.tsx

"use client";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlPage = searchParams.get("page");
  const getPaginationURL = (page: number) => {
    router.push(`?page=${!!urlPage ? urlPage : page}`);
  };

  useEffect(() => {
    getPaginationURL(currentPage);
  }, [currentPage]);

  return (
    <nav className="flex justify-center mt-4">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <div key={page} onClick={() => setCurrentPage(page)}>
          <span
            className={`mx-1 px-4 py-2 border rounded ${
              page === currentPage ? "bg-green text-white" : "border-gray-300"
            }`}
          >
            {page}
          </span>
        </div>
      ))}
    </nav>
  );
};

export default Pagination;
