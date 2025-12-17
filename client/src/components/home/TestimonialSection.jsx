import React, { useState } from "react";
import TestimonialCard from "../common/TestimonialCard";

import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";
import Heading from "../ul/Heading";

export default function TestimonialSection() {
  const testimonials = [
    {
      image: user1,
      name: "Jennifer Adams",
      text:
        "FitZone has completely transformed my life! The trainers are incredibly knowledgeable and supportive. I've lost 30 pounds and gained so much confidence. The facilities are top-notch and always clean.",
    },
    {
      image: user2,
      name: "Michael Brown",
      text:
        "Joining FitZone was the best decision! I’ve built strength and discipline, and the trainers really care about your goals.",
    },
    {
      image: user3,
      name: "Sophia Turner",
      text:
        "The premium equipment and supportive environment at FitZone made my fitness journey enjoyable and consistent!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const lastIndex = testimonials.length - 1;

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(lastIndex, i + 1));
  const goTo = (i) => setCurrentIndex(i);

  return (
    <section id="testimonials" className="bg-[var(--background-light)] py-20 text-center">
      <div className="w-[90%] md:w-[85%] xl:w-[50%] mx-auto">
        <Heading level="h2">
          Premium <span className="text-[var(--primary)]">Services</span>
        </Heading>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Experience premium equipment and amenities designed to elevate your fitness journey
        </p>

        {/* Slider */}
        <div className="testimonial-slider relative overflow-hidden">
          {/* Left arrow */}
          <button
            id="prev"
            onClick={prev}
            className={`arrow left ${currentIndex === 0 ? "opacity-50 pointer-events-none" : ""}`}
            aria-label="Previous"
          >
            <i className="ri-arrow-left-circle-fill"></i>
          </button>

          {/* Slides wrapper */}
          <div
            className="testimonial-wrapper flex transition-transform duration-[800ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((t, index) => (
              <TestimonialCard key={index} {...t} />
            ))}
          </div>

          {/* Right arrow */}
          <button
            id="next"
            onClick={next}
            className={`arrow right ${currentIndex === lastIndex ? "opacity-50 pointer-events-none" : ""}`}
            aria-label="Next"
          >
            <i className="ri-arrow-right-circle-fill"></i>
          </button>
        </div>

        {/* Circles */}
        <div className="cricle-wrapper">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`cricle ${currentIndex === i ? "active" : ""}`}
              data-index={i}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}