import React from "react";

export default function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
}) {
  const baseStyles =
    "px-4 py-2 rounded-md border-2 font-semibold text-md transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "border-[var(--primary)] bg-[var(--primary)] text-white hover:scale-105 hover:bg-[var(--primary)]",
    secondary:
      "border-[var(--primary)] text-[var(--primary)] hover:scale-105 hover:bg-[var(--primary)] hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}