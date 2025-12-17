import React, { useEffect, useState } from "react";
import { fetchMyTrainerClasses } from "../../api/classApi";
import { useAuth } from "../../hooks/useAuth";
import TrainerPlans from "../trainers/TrainerPlans";
import TrainerSchedule from "../trainers/TrainerSchedule";

export default function TrainerDashboard() {
  const { user } = useAuth();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchMyTrainerClasses().then((d) => setClasses(d.classes || []));
  }, []);

  if (!user) return null;

  return (
    <div className="md:p-6 p-2">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}</h1>

      <div className="grid md:grid-cols-3 gap-2">
        <TrainerPlans />
        <TrainerSchedule />
      </div>

      <div className="mt-6 bg-white p-4 rounded shadow">
        <h2 className="font-bold">Upcoming Classes</h2>
        {classes.slice(0, 3).map((c) => (
          <p key={c._id}>
            {c.title} – {new Date(c.date).toDateString()}
          </p>
        ))}
      </div>
    </div>
  );
}
