import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import Heading from "../ul/Heading";

export default function AdminLayout() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar role="admin" />
      <MobileSidebar role="admin" />

      {/* Main content */}
      <div className="flex-1 p-6">

        <Outlet />
      </div>
    </div>
  );
}