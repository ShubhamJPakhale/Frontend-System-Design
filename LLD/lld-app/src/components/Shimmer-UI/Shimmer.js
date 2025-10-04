import React from "react";

const Shimmer = () => {
  return Array(10)
    .fill(0)
    .map((data, i) => (
      <div key={i} className="p-5 m-5 border border-black rounded-lg">
        <div className="w-64 h-64 bg-gray-200" alt="shimmer" />
        <div className="mt-1 w-48 h-4 bg-gray-200" />
      </div>
    ));
};

export default Shimmer;
