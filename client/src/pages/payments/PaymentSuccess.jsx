import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import API from "../../api/axiosInstance";

export default function PaymentSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = new URLSearchParams(location.search).get("email");

  useEffect(() => {
    if (!email) {
      alert("Payment email missing");
      navigate("/");
      return;
    }

    const confirmPayment = async () => {
      try {
        const { data } = await API.post("/payments/success", { email });
        localStorage.setItem("memberQR", data.qrCode);
        alert(data.message);
        navigate("/dashboard/member");
      } catch (err) {
        alert(err.response?.data?.message || "Payment confirmation failed");
      }
    };

    confirmPayment();
  }, [email, navigate]);

  return (
    <h2 className="p-6 text-center text-xl font-semibold">
      Processing payment success...
    </h2>
  );
}
