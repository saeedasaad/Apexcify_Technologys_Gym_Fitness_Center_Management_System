import React, { useState } from "react";

export default function FAQCard({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-[var(--background-soft)] border border-gray-300 rounded-lg mb-4 transition-all duration-300 ${
        open ? "shadow-md" : ""
      }`}
    >
      {/* Question */}
      <div
        className="flex justify-between items-center cursor-pointer px-6 py-4"
        onClick={() => setOpen(!open)}
      >
        <h6 className="text-base font-semibold text-[#1e2324]">{question}</h6>
        <i
          className={`ri-add-line text-[var(--primary)] text-xl transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        ></i>
      </div>

      {/* Answer */}
      <div
        className={`px-6 overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 py-3" : "max-h-0"
        }`}
      >
        <p className="text-sm text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}