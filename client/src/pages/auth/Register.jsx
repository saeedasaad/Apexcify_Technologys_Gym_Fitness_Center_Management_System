import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axiosInstance"; 

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    membershipPlan: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(form.email)) {
      alert("Enter a valid email address");
      return;
    }
    if (!form.membershipPlan) {
      alert("Please select a membership plan");
      return;
    }

    setLoading(true);
    try {
      const { data } = await API.post("/auth/register", form); 
      alert(data.message);

      navigate("/payment", {
        state: { email: form.email, plan: form.membershipPlan },
      });
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-sm sm:max-w-md lg:max-w-lg space-y-6"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-center">Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="w-full p-2 sm:p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#2fb5c0]"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="w-full p-2 sm:p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#2fb5c0]"
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          className="w-full p-2 sm:p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#2fb5c0]"
        />

        <select
          value={form.membershipPlan}
          onChange={(e) =>
            setForm({ ...form, membershipPlan: e.target.value })
          }
          required
          className="w-full p-2 sm:p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#2fb5c0]"
        >
          <option value="">Select Membership Plan</option>
          <option value="Basic">Basic</option>
          <option value="Standard">Standard</option>
          <option value="Premium">Premium</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 sm:py-3 rounded text-white transition-colors ${
            loading ? "bg-gray-400" : "bg-[#2fb5c0] hover:bg-[#249aa3]"
          }`}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}