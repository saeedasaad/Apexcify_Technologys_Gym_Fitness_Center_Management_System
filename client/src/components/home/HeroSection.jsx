import React from "react";
import Navbar from "../layout/Navbar";
import Heading from "../ul/Heading";
import Button from "../ul/Button";
import heroImage from "../../assets/hero.webp";
import bgImage from "../../assets/bgImg.webp";
import { Link } from "react-router-dom";


export default function HeroSection() {
  return (
    <main
      className="relative w-full min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[rgba(28,35,36,0.92)] z-0"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 w-[90%] md:w-[85%] mx-auto pt-28 md:pt-40 flex flex-col md:flex-row items-center gap-12">
        {/* Content */}
        <div className="flex-1 max-w-xl text-center md:text-left">
          <Heading level="h1">
            Transform Your <br />
            <span className="text-[#2FB5C0]">Body</span> &{" "}
            <span className="text-[#2FB5C0]">Mind</span>
          </Heading>
          <p className="text-sm md:text-lg opacity-90 mb-6">
            Join the ultimate fitness experience with state-of-the-art facilities,
            expert trainers, and a community that pushes you to achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/login">
              <Button variant="primaryInline">Get Started Today</Button>
            </Link>

            <Button variant="secondary">View Schedule</Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 flex justify-center mb-20 md:mb-0">
          <img
            src={heroImage}
            alt="Gym Workout Plan"
            className="rounded-lg shadow-lg w-full max-w-sm md:max-w-lg object-cover"
          />
        </div>
      </section>
    </main>
  );
}