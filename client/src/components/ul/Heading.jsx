import React from "react";

export default function Heading({ level = "h2", children, color, align = "center" }) {
  const Tag = level;

  const styles = {
    h1: "text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-5 text-white",
    h2: `text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 text-${align} ${color || "text-[#1e2324]"}`,
    h3: `text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-semibold mb-3 text-${align} ${color || "text-[#1e2324]"}`,
  };

  return <Tag className={styles[level]}>{children}</Tag>;
}