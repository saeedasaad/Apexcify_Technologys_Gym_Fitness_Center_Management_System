import React from "react";

export default function FeatureList({ features, color = "text-gray-700" }) {
  return (
    <div className="grid gap-2 mb-6">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2">
          <i className="ri-checkbox-circle-fill text-[#2FB5C0] text-lg"></i>
          <p className={`text-sm ${color}`}>{feature}</p>
        </div>
      ))}
    </div>
  );
}