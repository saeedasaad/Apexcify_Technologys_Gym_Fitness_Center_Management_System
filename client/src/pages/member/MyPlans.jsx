import React, { useState } from "react";
import PlanCardDes from "../../components/common/PlanCardDes";

export default function MyPlans() {
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
      name: "Standard",
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
      name: "Premium",
      price: "$99",
      features: [
        "Everything in Standard",
        "Unlimited personal training",
        "Priority class booking",
        "Towel service",
        "Massage therapy (1/month)",
        "Unlimited guest passes",
        "Exclusive member events",
      ],
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(
    plans.find((p) => p.highlight)?.name
  );

  return (
    <div className="md:p-6 p-0 space-y-8">
      <h2 className="text-2xl font-bold mb-6">Membership Plans</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <PlanCardDes
            key={plan.name}
            name={plan.name}
            price={plan.price}
            features={plan.features}
            highlight={selectedPlan === plan.name}
            onChoose={() => setSelectedPlan(plan.name)}
          />
        ))}
      </div>
    </div>
  );
}
