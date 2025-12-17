import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { Table, TableHead, TableRow, TableHeader, TableCell } from "../../components/ul/Table";

export default function MemberSubscription() {
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const { data } = await axiosInstance.get("/payments/me");
        const user = data.user;

        const plan = user.membership?.plan || "Basic";

        const amount =
          user.paymentStatus === "paid"
            ? plan === "Basic"
              ? 29
              : plan === "Standard"
              ? 59
              : 99
            : 0;

        setTransaction({
          user: user.name,
          plan,
          amount: `$${amount}`,
          status: user.paymentStatus === "paid" ? "Paid" : "Pending",
          date: new Date(user.createdAt).toLocaleDateString(),
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchTransaction();
  }, []);

  const statusClass = (status) =>
    status === "Paid"
      ? "bg-green-100 text-green-700"
      : "bg-yellow-100 text-yellow-700";

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-xl font-semibold mb-4">My Subscription</h3>

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
          {transaction && (
            <TableRow>
              <TableCell>{transaction.user}</TableCell>
              <TableCell>{transaction.plan}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>
                <span className={`px-3 py-1 rounded-full text-sm ${statusClass(transaction.status)}`}>
                  {transaction.status}
                </span>
              </TableCell>
              <TableCell>{transaction.date}</TableCell>
            </TableRow>
          )}
        </tbody>
      </Table>
    </div>
  );
}
