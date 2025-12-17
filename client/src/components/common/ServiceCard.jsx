import React from "react";
import Button from "../ul/Button";
import FeatureList from "../ul/FeatureList";

export default function ServiceCard({ title, description, image, features, reverse }) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-10 mt-12 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="flex-1 min-w-[280px]">
        <img
          src={image}
          alt={title}
          className="w-full rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-[300px]">
        <h4 className="text-2xl lg:text-3xl font-semibold mb-4">{title}</h4>
        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

        <FeatureList features={features} color="text-gray-700" />

        <Button variant="primary">Learn More</Button>
      </div>
    </div>
  );
}