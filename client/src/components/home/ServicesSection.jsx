import React from "react";
import Heading from "../ul/Heading";
import ServiceCard from "../common/ServiceCard";

// images (adjust paths)
import s1 from "../../assets/S-img1.png";
import s2 from "../../assets/S-img2.png";
import s3 from "../../assets/S-img3.png";

export default function ServicesSection() {
  const services = [
    {
      title: "Personal Training",
      description:
        "One-on-one coaching tailored to your specific goals, fitness level, and schedule. Our certified trainers create customized workout plans and provide ongoing support.",
      image: s1,
      features: [
        "Personalized workout programs",
        "Progress tracking and guidance",
        "Nutrition and recovery advice",
        "Flexible scheduling options",
        "Motivation and accountability",
      ],
    },
    {
      title: "Group Classes",
      description:
        "High-energy group workouts led by expert instructors. From HIIT and spin to yoga and pilates, find the perfect class to match your fitness style and goals.",
      image: s2,
      features: [
        "Over 50 weekly classes",
        "Beginner to advanced levels",
        "HIIT, Spin, Yoga, Pilates, Boxing",
        "Small class sizes for attention",
        "Community support and motivation",
      ],
      reverse: true, 
    },
    {
      title: "Nutrition Coaching",
      description:
        "Expert nutritional guidance to complement your training. Our certified nutritionists help you develop sustainable eating habits that fuel your performance and results.",
      image: s3,
      features: [
        "Personalized meal plans",
        "Macro and calorie calculations",
        "Supplement recommendations",
        "Weekly check-ins and adjustments",
        "Recipe ideas and shopping lists",
      ],
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="w-[90%] md:w-[85%] mx-auto">
        <Heading level="h2">
          Premium <span className="text-[#2FB5C0]">Services</span>
        </Heading>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Comprehensive fitness solutions designed to help you reach your goals faster
        </p>

        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}