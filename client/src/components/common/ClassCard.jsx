import React from "react";

export default function ClassCard({ time, title, trainer, category }) {
  return (
    <div
      className="bg-gray-100 rounded-lg p-3 mb-3 transition-colors duration-300 hover:bg-gray-200"
      data-category={category}
    >
      <p className="text-[#2FB5C0] text-sm font-semibold">{time}</p>
      <h6 className="text-xs font-bold text-gray-800 my-2">{title}</h6>
      <p className="text-xs text-gray-600">{trainer}</p>
    </div>
  );
}