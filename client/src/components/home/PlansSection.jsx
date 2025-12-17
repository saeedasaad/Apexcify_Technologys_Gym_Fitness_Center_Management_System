import React from "react";
import Heading from "../ul/Heading";
import PlanCard from "../common/PlanCard";

export default function PlansSection() {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      features: [
        "Access to gym facilities",
        "Cardio and strength equipment",
        "Locker room access",
        "Free WiFi",
        "Mobile app access",
      ],
    },
    {
      name: "Pro",
      price: "$59",
      features: [
        "Everything in Basic",
        "Unlimited group classes",
        "Pool and sauna access",
        "2 personal training sessions/month",
        "Nutrition consultation",
        "Guest passes (2/month)",
      ],
      highlight: true,
    },
    {
      name: "Elite",
      price: "$99",
      features: [
        "Everything in Pro",
        "Unlimited personal training",
        "Priority class booking",
        "Towel service",
        "Massage therapy (1/month)",
        "Unlimited guest passes",
        "Exclusive member events",
      ],
    },
  ];

  return (
    <section id="membership" className="bg-[#334244] text-white py-20 xl:px-[100px] px-0">
      <div className="w-[90%] md:w-[85%] mx-auto">
        <Heading level="h2" color="text-white">
          Membership <span className="text-[#2FB5C0]">Plans</span>
        </Heading>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Choose the perfect plan to match your fitness goals and lifestyle
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>

        <p className="text-center text-gray-300">
          All plans include a{" "}
          <a href="#" className="text-[#2FB5C0] hover:underline">
            7-day free trial
          </a>
          . No credit card required.
        </p>
      </div>
    </section>
  );
}