import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", to: "/" },
    { label: "Facilities", href: "#facilities" },
    { label: "Services", href: "#services" },
    { label: "Trainers", href: "#trainers" },
    { label: "Schedule", href: "#schedule" },
    { label: "Membership", href: "#membership" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#FAQ" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[rgba(46,69,73,0.66)] backdrop-blur-md">
      <div className="w-[90%] md:w-[85%] mx-auto py-4 md:py-6 flex items-center justify-between">
        {/* Logo */}

        <Link to="/">
          <img src={logo} className="w-[140px]" alt="Gym Fitness Logo" />
        </Link>


        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-2xl md:hidden"
        >
          <i className={open ? "ri-close-line" : "ri-menu-line"}></i>
        </button>

        {/* Menu */}
        <div
          className={`absolute md:static left-0 top-full w-full md:w-auto 
          bg-[rgba(46,69,73,0.95)] md:bg-transparent transition-all duration-300 ease-in-out 
          ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0 md:opacity-100 md:max-h-full"} 
          overflow-hidden md:overflow-visible`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 px-6 py-10 md:py-0 md:px-0">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                {item.to ? (
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="text-white px-2 py-2 transition duration-300 group-hover:text-[#2FB5C0]"
                  >
                    {item.label}
                    <span className="absolute left-[7px] bottom-0 w-0 h-[2px] bg-[#2FB5C0] transition-all duration-300 group-hover:w-3/4"></span>
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-white px-2 py-2 transition duration-300 group-hover:text-[#2FB5C0]"
                  >
                    {item.label}
                    <span className="absolute left-[9px] bottom-0 w-0 h-[2px] bg-[#2FB5C0] transition-all duration-300 group-hover:w-3/4"></span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}