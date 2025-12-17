import React from "react";
import Heading from "../ul/Heading";
import TrainerCard from "../common/TrainerCard";

// images (adjust paths)
import t1 from "../../assets/T_img-1.jpg";
import t2 from "../../assets/T_img-2.jpg";
import t3 from "../../assets/T_img-3.jpg";
import t4 from "../../assets/T_img-4.jpg";
import t5 from "../../assets/T_img-5.jpg";
import t6 from "../../assets/T_img-6.jpg";
import t7 from "../../assets/T_img-7.jpg";

export default function TrainersSection() {
  const trainers = [
    {
      image: t1,
      name: "Marcus Johnson",
      specialty: "Strength & Conditioning",
      socials: ["ri-instagram-line", "ri-twitter-x-line", "ri-linkedin-fill"],
    },
    {
      image: t2,
      name: "Sarah Chen",
      specialty: "Yoga & Pilates",
      socials: ["ri-instagram-line", "ri-twitter-x-line", "ri-linkedin-fill"],
    },
    {
      image: t3,
      name: "David Martinez",
      specialty: "HIIT & Boxing",
      socials: ["ri-instagram-line", "ri-twitter-x-line", "ri-linkedin-fill"],
    },
    {
      image: t4,
      name: "Emily Rodriguez",
      specialty: "Nutrition & Wellness",
      socials: ["ri-instagram-line", "ri-twitter-x-line", "ri-linkedin-fill"],
    },
    {
      image: t5,
      name: "James Wilson",
      specialty: "Powerlifting",
      socials: ["ri-instagram-line", "ri-twitter-x-line", "ri-linkedin-fill"],
    },
    {
      image: t6,
      name: "Lisa Thompson",
      specialty: "Cardio & Endurance",
      socials: ["ri-instagram-line", "ri-twitter-x-line", "ri-linkedin-fill"],
    },
    {
      image: t7,
      name: "Marcus Johnson",
      specialty: "Strength & Conditioning",
      socials: ["ri-instagram-line", "ri-twitter-x-line", "ri-linkedin-fill"],
    },
  ];

  return (
    <section id="trainers" className="bg-gray-100 py-20">
      <div className="w-[90%] md:w-[85%] mx-auto">
        <Heading level="h2">
          Expert <span className="text-[#2FB5C0]">Trainers</span>
        </Heading>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Meet our certified professionals dedicated to helping you achieve your fitness goals
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
          {trainers.map((trainer, index) => (
            <TrainerCard key={index} {...trainer} />
          ))}
        </div>
      </div>
    </section>
  );
}