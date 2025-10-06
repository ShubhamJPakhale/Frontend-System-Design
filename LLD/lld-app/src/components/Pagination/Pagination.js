import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [mealData, setMealData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchData();
  }, [page, limit]);

  const fetchData = async () => {
    try {
      const result = await fetch(
        `https://api.freeapi.app/api/v1/public/meals?page=${page}&limit=${limit}`
      );
      if (!result.ok) throw new Error("Error fetching data");
      const data = await result.json();
      setMealData(data?.data?.data || []);
      setTotalPages(Math.ceil(data?.data?.totalItems / limit));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // ✅ Simple pagination logic
  const getPagination = () => {
    const pages = [];

    if (totalPages <= 7) {
      // show all pages if total is small
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // always show first page
      pages.push(1);

      // show dots if current page > 4
      if (page > 4) pages.push("...");

      // show pages around current page
      const start = Math.max(2, page - 1);
      const end = Math.min(totalPages - 1, page + 1);
      for (let i = start; i <= end; i++) pages.push(i);

      // show dots before last page if needed
      if (page < totalPages - 3) pages.push("...");

      // always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  const pagination = getPagination();

  return (
    <div className="p-6 bg-gray-100 space-y-4">
      <h2 className="font-bold text-lg">Pagination</h2>

      <select
        onChange={(e) => setLimit(Number(e.target.value))}
        className="p-2 border rounded"
        value={limit}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>

      <div>
        {mealData.length > 0 ? (
          mealData.map((meal) => <div key={meal.id}>{meal.strMeal}</div>)
        ) : (
          <div>No meals found</div>
        )}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>

        {pagination.map((p, idx) =>
          p === "..." ? (
            <span key={`dots-${idx}`} className="px-2">
              ...
            </span>
          ) : (
            <button
              key={`page-${p}`}
              onClick={() => setPage(p)}
              className={`px-3 py-1 rounded ${
                page === p ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {p}
            </button>
          )
        )}

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
