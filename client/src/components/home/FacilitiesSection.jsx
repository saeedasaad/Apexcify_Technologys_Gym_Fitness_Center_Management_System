import React from "react";
import Heading from "../ul/Heading";
import FacilitiesCard from "../common/FacilitiesCard";

// images (adjust paths to your assets folder)
import f1 from "../../assets/F-img-1.jpg";
import f2 from "../../assets/F-img-2.jpg";
import f3 from "../../assets/F-img-3.jpg";
import f4 from "../../assets/F-img-4.jpg";
import f5 from "../../assets/F-img-5.jpg";
import f6 from "../../assets/F-img-6.jpg";
import f7 from "../../assets/F-img-7.jpeg";
import f8 from "../../assets/F-img-8.jpeg";

export default function FacilitiesSection() {
  const facilities = [
    {
      icon: "ri-heart-pulse-line",
      image: f1,
      title: "Recovery Lounge",
      description:
        "Relax in a modern recovery area equipped with massage chairs and stretching tools.",
    },
    {
      icon: "ri-run-line",
      image: f2,
      title: "Cardio Arena",
      description:
        "State-of-the-art treadmills, ellipticals, and bikes with real-time performance tracking.",
    },
    {
      icon: "ri-water-flash-line",
      image: f3,
      title: "Swimming Pool",
      description:
        "Olympic-size heated pool for lap swimming, aqua aerobics, and recovery sessions.",
    },
    {
      icon: "ri-fire-line",
      image: f4,
      title: "Sauna & Steam Room",
      description:
        "Traditional and infrared saunas for detox, recovery, and post-workout relaxation.",
    },
    {
      icon: "fa-solid fa-dumbbell",
      image: f5,
      title: "Free Weights Zone",
      description:
        "Extensive dumbbell collection from 5–150 lbs, kettlebells, and functional training tools.",
    },
    {
      icon: "ri-heart-add-line",
      image: f6,
      title: "Recovery Zone",
      description:
        "Foam rollers, massage chairs, and mobility tools designed for peak performance.",
    },
    {
      icon: "ri-basketball-line",
      image: f7,
      title: "Sports Court",
      description:
        "Indoor multi-sport court for basketball, badminton, and group training sessions.",
    },
    {
      icon: "ri-cup-line",
      image: f8,
      title: "Café & Nutrition Bar",
      description:
        "Enjoy protein shakes, smoothies, and healthy snacks crafted for your fitness goals.",
    },
  ];

  return (
    <section id="facilities" className="bg-gray-100 py-20">
      <div className="w-[90%] md:w-[85%] mx-auto">
        {/* Heading */}
        <Heading level="h2">
          World-Class <span className="text-[#2FB5C0]">Facilities</span>
        </Heading>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12 text-lg">
          Experience premium equipment and amenities designed to elevate your fitness journey.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:px-20 px-0">
          {facilities.map((facility, index) => (
            <FacilitiesCard key={index} {...facility} />
          ))}
        </div>
      </div>
    </section>
  );
}