import React from "react";
import Button from "../ul/Button";
import FeatureList from "../ul/FeatureList";

export default function PlanCardDes({ name, price, features = [], highlight, onChoose }) {
  return (
    <div
      className={`rounded-2xl p-8 transition-transform duration-300 border-2 text-left 
        ${highlight ? "bg-white shadow-xl" : "bg-white border-transparent"}  
        hover:shadow-2xl hover:border-[#2FB5C0]`}
    >
      <h6 className="text-lg uppercase mb-3 text-black">{name}</h6>
      <h3 className="text-3xl font-bold text-white mb-6">
        {price} <span className="text-base opacity-80">/month</span>
      </h3>

      <FeatureList features={features} color="text-gray-800" />

      <Button onClick={onChoose} variant="primary" className="w-full">
        Choose Plan
      </Button>
    </div>
  );
}
