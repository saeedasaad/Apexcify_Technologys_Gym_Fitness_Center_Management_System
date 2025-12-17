import React from "react";

export default function TestimonialCard({ image, name, text, stars = 5 }) {
  return (
    <div className="testimonial-slide min-w-full flex justify-center items-center p-6">
      <div className="testimonial-content bg-white rounded-xl p-8 max-w-xl text-center shadow-lg">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full border-4 border-[#2FB5C0] object-cover mx-auto mb-4 shadow-md"
        />
        <div className="flex justify-center text-[#2FB5C0] mb-4">
          {Array.from({ length: stars }).map((_, i) => (
            <i key={i} className="ri-star-fill text-lg"></i>
          ))}
        </div>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
          "{text}"
        </p>
        <h3 className="text-lg font-semibold text-[#1e2324]">{name}</h3>
      </div>
    </div>
  );
}