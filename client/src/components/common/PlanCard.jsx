import React from "react";
import Button from "../ul/Button";
import FeatureList from "../ul/FeatureList";

export default function PlanCard({ name, price, features, highlight }) {
  return (
    <div
      className={`rounded-2xl p-8 transition-transform duration-300 border-2 text-left 
      ${highlight ? "bg-[#3d4f51] border-[#2FB5C0] shadow-xl" : "bg-[#3d4f51] border-transparent"} 
      hover:-translate-y-2 hover:shadow-2xl`}
    >
      <h6 className="text-lg uppercase mb-3 text-gray-100">{name}</h6>
      <h3 className="text-3xl font-bold text-white mb-6">
        {price} <span className="text-base opacity-80">/month</span>
      </h3>

      <FeatureList features={features} color="text-gray-200" />

      <Button variant="primary">Get Started</Button>
    </div>
  );
}