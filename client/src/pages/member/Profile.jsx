import React from "react";
import { useAuth } from "../../hooks/useAuth";

export default function Profile() {
  const { user } = useAuth();
  if (!user) return null;

  return (
    <div className="p-6 bg-white rounded shadow space-y-2">
      <h2 className="text-xl font-bold">My Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>

      {user.membership && (
        <>
          <p>Plan: {user.membership.plan}</p>
          <p>Status: {user.membership.status}</p>
          <p>Payment: {user.paymentStatus}</p>
        </>
      )}
    </div>
  );
}
