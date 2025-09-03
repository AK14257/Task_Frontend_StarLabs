import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex gap-3 items-center justify-center my-8">
      <button
        className="px-3 py-1 rounded border border-gray-400 bg-black/50 text-gray-200 hover:bg-blue-700 hover:text-white transition disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {pageNumbers.map((num) => (
        <button
          key={num}
          className={`px-4 py-1 rounded border border-gray-500 ${
            currentPage === num
              ? "bg-blue-600 text-white"
              : "bg-black/60 text-gray-200 hover:bg-blue-800 hover:text-white"
          } transition`}
          onClick={() => onPageChange(num)}
        >
          {num}
        </button>
      ))}
      <button
        className="px-3 py-1 rounded border border-gray-400 bg-black/50 text-gray-200 hover:bg-blue-700 hover:text-white transition disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
}
