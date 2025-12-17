import React, { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    visible && (
      <button
        title="Go to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed right-5 bottom-5 z-50 bg-teal-500 text-white rounded-full p-3 text-3xl shadow-lg hover:bg-gray-900 flex items-center justify-center"
      >
        <i className="ri-arrow-up-double-line"></i>
      </button>
    )
  );
}