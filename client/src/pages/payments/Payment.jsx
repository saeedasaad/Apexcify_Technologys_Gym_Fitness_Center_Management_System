import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";

export default function Payment() {
  const location = useLocation();
  const email = location.state?.email;
  const plan = location.state?.plan || "Basic";
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (!email) return alert("Invalid email");

    setLoading(true);
    try {
      const { data } = await axiosInstance.post(
        "/payments/create-checkout-session",
        { email, plan }
      );

      window.location.href = data.url;
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold mb-4">Complete Payment</h2>
        <p className="mb-4">Membership plan: <b>{plan}</b></p>

        <button
          onClick={handlePayment}
          disabled={loading}
          className={`px-4 py-2 rounded text-white ${loading ? "bg-gray-400" : "bg-[#2fb5c0]"
            }`}
        >
          {loading ? "Redirecting..." : "Pay with Stripe"}
        </button>
      </div>
    </div>
  );
}
