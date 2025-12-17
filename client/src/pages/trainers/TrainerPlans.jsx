import React, { useEffect, useState } from "react";
import { fetchMyTrainerProfile } from "../../api/trainerApi";

export default function TrainerPlans() {
  const [plans, setPlans] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPlans = async () => {
      try {
        const response = await fetchMyTrainerProfile(); 
        const trainer = response.data?.trainer;        
        if (trainer?.plans?.length) {
          setPlans(trainer.plans);
        } else {
          setError("No plans assigned.");
        }
      } catch (err) {
        setError(
          "Failed to load plans. Make sure you are logged in as a trainer."
        );
        console.error(err);
      }
    };
    loadPlans();
  }, []);

  return (
    <div className="grid-cols-1 gap-4 md:p-4 p-0">
      {plans.length > 0 ? (
        plans.map((plan, idx) => (
          <div key={idx} className="bg-white shadow rounded p-4 mb-3">
            <h3 className="text-lg font-semibold">{plan}</h3>
          </div>
        ))
      ) : (
        <p className="text-gray-500">{error}</p>
      )}
    </div>
  );
}
