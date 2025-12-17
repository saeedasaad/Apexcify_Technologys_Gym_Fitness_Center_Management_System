import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { useAuth } from "../../hooks/useAuth";
import Button from "../../components/ul/Button";

export default function MemberDashboard() {
  const { user } = useAuth();
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadClasses = async () => {
      const res = await axiosInstance.get("/classes");
      setClasses(res.data.classes || []);
      setLoading(false);
    };
    loadClasses();
  }, []);

  if (!user) return <p>Loading...</p>;
  if (loading) return <p>Loading classes...</p>;

  const membership = user.membership;

  return (
    <div className="md:p-6 p-0 space-y-6">
      <div className="bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
        <p>{user.email}</p>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold">Membership</h2>
        {membership ? (
          <>
            <p>Plan: {membership.plan}</p>
            <p>Status: {user.paymentStatus}</p>
          </>
        ) : (
          <p>No active membership</p>
        )}
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3">Available Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {classes.map((c) => (
            <div key={c._id} className="bg-white p-4 rounded shadow">
              <p className="font-semibold">{c.title}</p>
              <p>{new Date(c.date).toDateString()}</p>

              {user.paymentStatus === "paid" ? (
                <Button>Book Class</Button>
              ) : (
                <p className="text-red-500">Payment required</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
