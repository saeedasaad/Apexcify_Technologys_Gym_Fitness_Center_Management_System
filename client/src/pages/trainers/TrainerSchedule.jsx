import React, { useEffect, useState } from "react";
import { fetchMyTrainerClasses } from "../../api/classApi";

export default function TrainerSchedule() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadClasses = async () => {
      try {
        const response = await fetchMyTrainerClasses();

        console.log("Trainer classes response:", response.data);

        // Handle ALL possible backend responses
        if (Array.isArray(response.data)) {
          setClasses(response.data);
        } else if (Array.isArray(response.data.classes)) {
          setClasses(response.data.classes);
        } else {
          setClasses([]);
        }
      } catch (err) {
        console.error("Failed to fetch trainer classes", err);

        if (err.response?.status === 403) {
          setError("Unauthorized. Login as trainer.");
        } else {
          setError("Could not load classes");
        }
      } finally {
        setLoading(false);
      }
    };

    loadClasses();
  }, []);

  if (loading) return <p className="p-4">Loading trainer classes...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="bg-white shadow rounded p-6">
      <h2 className="text-xl font-bold mb-4">My Class Schedule</h2>

      {classes.length > 0 ? (
        <ul className="space-y-3">
          {classes.map((c) => (
            <li key={c._id} className="border p-3 rounded">
              <p className="font-semibold">{c.title}</p>
              <p className="text-gray-600">
                {new Date(c.date).toLocaleDateString()}
              </p>
              <p className="text-gray-600">
                {c.startTime} - {c.endTime}
              </p>
              <p className="text-sm text-gray-500">
                Capacity: {c.capacity} | Booked: {c.attendees?.length || 0}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No scheduled classes.</p>
      )}
    </div>
  );
}
