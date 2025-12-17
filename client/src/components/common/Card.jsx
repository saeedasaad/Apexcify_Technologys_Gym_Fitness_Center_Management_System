import React from "react";

export default function Card({ title, description }) {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}