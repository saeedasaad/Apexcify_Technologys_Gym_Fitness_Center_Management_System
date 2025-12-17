import React from "react";

export default function FacilitiesCard({ icon, image, title, description }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300">
      {/* Image + Icon */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
        />
        <i className={`${icon} absolute bottom-3 left-3 text-[#2FB5C0] text-3xl`}></i>
      </div>

      {/* Content */}
      <div className="px-5 py-8 text-left">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}