import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { CreditCard, DollarSign, Users } from "lucide-react";
import Heading from "../../components/ul/Heading";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
} from "../../components/ul/Table";

export default function Subscription() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axiosInstance.get("/payments/all");

        // Backend returns an array
        const payments = Array.isArray(res.data) ? res.data : [];

        const mapped = payments.map((payment, idx) => {
          const plan = payment.plan || "Basic";

          const amount =
            payment.status === "paid"
              ? plan === "Basic"
                ? 29
                : plan === "Standard"
                ? 59
                : 99
              : 0;

          return {
            id: payment._id || idx,
            user: payment.user?.name || "Unknown",
            plan,
            amount: `$${amount}`,
            status: payment.status === "paid" ? "Paid" : "Pending",
            date: payment.createdAt
              ? new Date(payment.createdAt).toLocaleDateString()
              : "-",
          };
        });

        setTransactions(mapped);
      } catch (error) {
        console.error("❌ Failed to fetch payments:", error);
        setTransactions([]);
      }
    };

    fetchTransactions();
  }, []);

  // Stats
  const totalRevenue = transactions
    .filter((t) => t.status === "Paid")
    .reduce((acc, t) => acc + Number(t.amount.replace("$", "")), 0);

  const activeSubscribers = transactions.filter(
    (t) => t.status === "Paid"
  ).length;

  const paymentsToday = transactions.filter(
    (t) =>
      t.status === "Paid" &&
      t.date === new Date().toLocaleDateString()
  ).length;

  return (
    <div className="p-6 space-y-6">
      <Heading align="start">Payments</Heading>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <Stat
          icon={<DollarSign />}
          label="Total Revenue"
          value={`$${totalRevenue}`}
        />
        <Stat
          icon={<Users />}
          label="Active Subscribers"
          value={activeSubscribers}
        />
        <Stat
          icon={<CreditCard />}
          label="Payments Today"
          value={paymentsToday}
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow p-6">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>User</TableHeader>
              <TableHeader>Plan</TableHeader>
              <TableHeader>Amount</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Date</TableHeader>
            </TableRow>
          </TableHead>

          <tbody>
            {transactions.length === 0 ? (
              <TableRow>
                <TableCell colSpan="5" className="text-center text-gray-500">
                  No payments found
                </TableCell>
              </TableRow>
            ) : (
              transactions.map((t) => (
                <TableRow key={t.id}>
                  <TableCell>{t.user}</TableCell>
                  <TableCell>{t.plan}</TableCell>
                  <TableCell>{t.amount}</TableCell>
                  <TableCell>{t.status}</TableCell>
                  <TableCell>{t.date}</TableCell>
                </TableRow>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

/* ---------- Stat Card ---------- */
const Stat = ({ icon, label, value }) => (
  <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
    <div className="bg-[#2fb5c0]/20 p-3 rounded">{icon}</div>
    <div>
      <p className="text-gray-500">{label}</p>
      <h3 className="text-xl font-semibold">{value}</h3>
    </div>
  </div>
);
