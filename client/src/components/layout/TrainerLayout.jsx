import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import Heading from "../ul/Heading";

export default function TrainerLayout() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar role="trainer" />
      <MobileSidebar role="trainer" />

      <div className="flex-1 p-6">
        <Heading level="h2" align="start">
          Trainer<span className="text-[#2FB5C0]">Dashboard</span>
        </Heading>
        <Outlet />
      </div>
    </div>
  );
}