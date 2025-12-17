import React from "react";

export default function ContactInfoCard({ icon, title, children }) {
  return (
    <div className="flex items-center justify-start gap-4">
      <i className={`${icon} text-[var(--primary)] text-2xl bg-[#2fb4c023] p-2 rounded-md`}></i>
      <div>
        <h6 className="font-semibold">{title}</h6>
        <p className="text-sm text-gray-700">{children}</p>
      </div>
    </div>
  );
}