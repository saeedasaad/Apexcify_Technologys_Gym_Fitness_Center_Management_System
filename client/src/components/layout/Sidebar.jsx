import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // <-- import useNavigate
import { AuthContext } from "../../context/AuthContext";
import logo from "../../assets/logo.svg";
import Button from "../ul/Button";
import { FaHome, FaCalendarAlt, FaUsers, FaCreditCard, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar({ role }) {
  const { logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logout(); 
    navigate("/login"); 
  };

  const links = {
    admin: [
      { to: "/dashboard/admin", label: "Overview", icon: <FaHome className="w-5 h-5" /> },
      { to: "/dashboard/admin/classes", label: "Classes", icon: <FaCalendarAlt className="w-5 h-5" /> },
      { to: "/dashboard/admin/trainers", label: "Trainers", icon: <FaUsers className="w-5 h-5" /> },
      { to: "/dashboard/admin/payments", label: "Payments", icon: <FaCreditCard className="w-5 h-5" /> },
    ],
    trainer: [
      { to: "/dashboard/trainer", label: "Overview", icon: <FaHome className="w-5 h-5" /> },
      { to: "/dashboard/trainer/classes", label: "My Classes", icon: <FaCalendarAlt className="w-5 h-5" /> },
      { to: "/dashboard/trainer/plans", label: "Plans", icon: <FaCreditCard className="w-5 h-5" /> },
    ],
    member: [
      { to: "/dashboard/member", label: "Overview", icon: <FaHome className="w-5 h-5" /> },
      { to: "/dashboard/member/classes", label: "Class Schedule", icon: <FaCalendarAlt className="w-5 h-5" /> },
      { to: "/dashboard/member/plans", label: "My Plans", icon: <FaCreditCard className="w-5 h-5" /> },
      { to: "/dashboard/member/subscription", label: "Subscription", icon: <FaCreditCard className="w-5 h-5" /> },
    ],
  };

  return (
    <aside
      className="hidden md:flex w-64 min-h-screen flex-col justify-between"
      style={{ backgroundColor: "var(--background-dark)", color: "var(--text-color)" }}
    >
      {/* Top section with logo */}
      <div className="p-6">
        <div className="flex items-start justify-start mb-8">
          <Link to="/">
            <img src={logo} className="w-[140px]" alt="Gym Fitness Logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-2">
          {links[role].map((l) => {
            const isActive = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`flex items-center gap-3 px-4 py-2 rounded-md font-medium transition-all ${
                  isActive
                    ? "bg-[var(--primary)] text-white"
                    : "hover:bg-[var(--overlay-dark)] hover:text-[var(--primary)]"
                }`}
                style={{ color: isActive ? "white" : "var(--text-color)" }}
              >
                {l.icon}
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Logout */}
      <div className="p-6 border-t border-gray-700 w-full">
        <Button
          variant="primary"
          onClick={handleLogout} 
          className="w-full flex items-center justify-center gap-2"
        >
          <FaSignOutAlt className="w-5 h-5" />
          Logout
        </Button>
      </div>
    </aside>
  );
}
