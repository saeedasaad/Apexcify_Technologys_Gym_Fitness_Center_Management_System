import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import Heading from "../../components/ul/Heading";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const paymentsRes = await axiosInstance.get("/payments/all");
        setUsers(paymentsRes.data.users || []);

        const trainersRes = await axiosInstance.get("/trainers");
        setTrainers(trainersRes.data.trainers || []);

        const classesRes = await axiosInstance.get("/classes");
        setClasses(classesRes.data.classes || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  // ===== Metrics =====
  const activeMembers = users.filter((u) => u.paymentStatus === "paid").length;

  const newSignups = users.filter((u) => {
    const d = new Date(u.createdAt);
    const n = new Date();
    return d.getMonth() === n.getMonth() && d.getFullYear() === n.getFullYear();
  }).length;

  const totalRevenue = users.reduce((acc, u) => {
    if (u.paymentStatus !== "paid") return acc;
    const plan = u.membership?.plan?.toLowerCase(); 
    if (plan === "basic") return acc + 29;
    if (plan === "standard") return acc + 59;
    if (plan === "premium") return acc + 99;
    return acc;
  }, 0);

  return (
    <div className="md:p-6 bg-gray-100 min-h-screen p-0">
      <Heading level="h2" align="start">
        Admin <span className="text-[#2fb5c0]">Dashboard</span>
      </Heading>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Active Members */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <p className="text-gray-500 uppercase font-semibold text-sm">Active Members</p>
          <h2 className="text-3xl font-bold mt-2">{activeMembers}</h2>
        </div>

        {/* New Signups */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <p className="text-gray-500 uppercase font-semibold text-sm">New Signups</p>
          <h2 className="text-3xl font-bold mt-2">{newSignups}</h2>
        </div>

        {/* Total Revenue */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <p className="text-gray-500 uppercase font-semibold text-sm">Total Revenue</p>
          <h2 className="text-3xl font-bold mt-2">${totalRevenue}</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <p className="text-gray-500 uppercase font-semibold text-sm">Total Trainers</p>
          <h2 className="text-2xl font-bold mt-2">{trainers.length}</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <p className="text-gray-500 uppercase font-semibold text-sm">Total Classes</p>
          <h2 className="text-2xl font-bold mt-2">{classes.length}</h2>
        </div>
      </div>
    </div>
  );
}
