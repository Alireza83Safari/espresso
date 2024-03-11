"use client";
import React from "react";

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
  return (
    <nav className="mt-4 flex justify-center">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <div key={page} onClick={() => setCurrentPage(page)}>
          <span
            className={`mx-1 rounded border px-4 py-2 ${
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
