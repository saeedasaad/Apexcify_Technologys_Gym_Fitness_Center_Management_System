import React from "react";

export default function FooterCard({ title, children }) {
  return (
    <div className="flex flex-col items-start">
      {title && <h6 className="text-lg font-semibold mb-3">{title}</h6>}
      {children}
    </div>
  );
}