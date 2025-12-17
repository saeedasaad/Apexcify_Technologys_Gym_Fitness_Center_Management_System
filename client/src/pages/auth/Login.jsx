import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import API from "../../api/axiosInstance"; 

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await API.post("/auth/login", form); // call backend
      login(data);

      // Redirect based on role
      if (data.user.role === "admin") navigate("/dashboard/admin");
      else if (data.user.role === "trainer") navigate("/dashboard/trainer");
      else navigate("/dashboard/member");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
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
        <h2 className="text-xl sm:text-2xl font-bold text-center">Login</h2>

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

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 sm:py-3 rounded text-white transition-colors ${
            loading ? "bg-gray-400" : "bg-[#2fb5c0] hover:bg-[#249aa3]"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-xs sm:text-sm text-gray-600 text-center mt-4">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-[#2fb5c0] font-semibold hover:underline"
          >
            Create one
          </Link>
        </p>
      </form>
    </div>
  );
}