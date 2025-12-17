import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../assets/logo.svg";

import Button from "../ul/Button";
import {
  FaHome,
  FaCalendarAlt,
  FaUsers,
  FaCreditCard,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function MobileSidebar({ role = "admin" }) {
  const { logout } = useContext(AuthContext);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Define links for each role
  const links = {
    admin: [
      { to: "/dashboard/admin", label: "Overview", icon: <FaHome className="w-5 h-5" /> },
      { to: "/dashboard/admin/classes", label: "Classes", icon: <FaCalendarAlt className="w-5 h-5" /> },
      { to: "/dashboard/admin/trainers", label: "Trainers", icon: <FaUsers className="w-5 h-5" /> },
      { to: "/dashboard/admin/payments", label: "Payments", icon: <FaCreditCard className="w-5 h-5" /> },
    ],
    trainer: [
      { to: "/dashboard/trainer", label: "Overview", icon: <FaHome className="w-5 h-5" /> },
      { to: "/dashboard/trainer/classes", label: "Schedule", icon: <FaCalendarAlt className="w-5 h-5" /> },
      { to: "/dashboard/trainer/plans", label: "Attendance", icon: <FaUsers className="w-5 h-5" /> },
    ],
    member: [
      { to: "/dashboard/member", label: "Overview", icon: <FaHome className="w-5 h-5" /> },
      { to: "/dashboard/member/classes", label: "Classes", icon: <FaCalendarAlt className="w-5 h-5" /> },
      { to: "/dashboard/member/plans", label: "My Plans", icon: <FaCreditCard className="w-5 h-5" /> },
      { to: "/dashboard/member/subscription", label: "Subscription", icon: <FaUsers className="w-5 h-5" /> },
    ],
  };

  const menuItems = links[role] || [];

  const handleLogout = () => {
    logout();         
    setIsOpen(false);  
  };

  return (
    <>
      {/* Top bar with menu icon */}
      <div className="md:hidden p-4 bg-[var(--background-dark)] text-white flex justify-between items-center">
        <img src={logo} alt="Gym Fitness Logo" className="w-[100px]" />
        <button onClick={() => setIsOpen(true)} className="text-white text-2xl">
          <FaBars />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-full transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-[var(--background-dark)] text-[var(--text-color)] z-50`}
      >
        <div className="p-6">
          {/* Logo + Close button */}
          <div className="flex items-center justify-between mb-14">
            <Link to="/">
              <img src={logo} className="w-[100px]" alt="Gym Fitness Logo" />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[var(--primary)] transition-colors"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2">
            {menuItems.map((l) => {
              const isActive = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`flex items-center gap-3 py-2 rounded-md font-medium transition-all ${
                    isActive
                      ? "text-white"
                      : "hover:bg-[var(--overlay-dark)] hover:text-[var(--primary)]"
                  }`}
                  style={{ color: isActive ? "white" : "var(--text-color)" }}
                  onClick={() => setIsOpen(false)}
                >
                  {l.icon}
                  {l.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Logout button */}
        <div className="p-6 border-t border-gray-700 w-full">
          <Button
            variant="primary"
            onClick={handleLogout}
            className="w-[150px] flex items-center justify-center gap-2"
          >
            <FaSignOutAlt className="w-5 h-5" />
            Logout
          </Button>
        </div>
      </aside>
    </>
  );
}
