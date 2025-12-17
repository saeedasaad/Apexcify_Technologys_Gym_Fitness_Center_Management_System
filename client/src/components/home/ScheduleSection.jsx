import React, { useState } from "react";
import Heading from "../ul/Heading";
import Button from "../ul/Button";
import ClassCard from "../common/ClassCard";

export default function ScheduleSection() {
  const [filter, setFilter] = useState("all");

  const schedule = {
    Monday: [
      { time: "6:00 AM", title: "HIIT Blast", trainer: "David M.", category: "HIIT" },
      { time: "9:00 AM", title: "Yoga Flow", trainer: "Sarah C.", category: "Yoga" },
      { time: "5:00 PM", title: "Strength Training", trainer: "Marcus J.", category: "Strength" },
      { time: "7:00 PM", title: "Spin Class", trainer: "Lisa T.", category: "Cardio" },
    ],
    Tuesday: [
      { time: "6:00 AM", title: "Boxing", trainer: "David M.", category: "Boxing" },
      { time: "10:00 AM", title: "Pilates", trainer: "Sarah C.", category: "Yoga" },
      { time: "5:30 PM", title: "Powerlifting", trainer: "James W.", category: "Strength" },
      { time: "7:00 PM", title: "Cardio Blast", trainer: "Lisa T.", category: "Cardio" },
    ],
    Wednesday: [
      { time: "6:00 AM", title: "HIIT Blast", trainer: "David M.", category: "HIIT" },
      { time: "9:00 AM", title: "Yoga Flow", trainer: "Sarah C.", category: "Yoga" },
      { time: "5:00 PM", title: "Strength Training", trainer: "Marcus J.", category: "Strength" },
      { time: "7:00 PM", title: "Spin Class", trainer: "Lisa T.", category: "Cardio" },
    ],
    Thursday: [
      { time: "10:00 AM", title: "Pilates", trainer: "Sarah C.", category: "Yoga" },
      { time: "5:30 PM", title: "Powerlifting", trainer: "James W.", category: "Strength" },
      { time: "7:00 PM", title: "Cardio Blast", trainer: "Lisa T.", category: "Cardio" },
    ],
    Friday: [
      { time: "6:00 AM", title: "HIIT Blast", trainer: "David M.", category: "HIIT" },
      { time: "9:00 AM", title: "Yoga Flow", trainer: "Sarah C.", category: "Yoga" },
      { time: "5:00 PM", title: "Strength Training", trainer: "Marcus J.", category: "Strength" },
      { time: "7:00 PM", title: "Spin Class", trainer: "Lisa T.", category: "Cardio" },
    ],
    Saturday: [
      { time: "8:00 AM", title: "Boxing", trainer: "David M.", category: "Boxing" },
      { time: "10:00 AM", title: "Yoga Flow", trainer: "Sarah C.", category: "Yoga" },
      { time: "12:00 PM", title: "HIIT Blast", trainer: "David M.", category: "HIIT" },
    ],
    Sunday: [
      { time: "9:00 AM", title: "Yoga Flow", trainer: "Sarah C.", category: "Yoga" },
      { time: "11:00 AM", title: "Pilates", trainer: "Sarah C.", category: "Yoga" },
      { time: "4:00 PM", title: "Cardio Blast", trainer: "Lisa T.", category: "Cardio" },
    ],
  };

  const filters = ["all", "HIIT", "Yoga", "Strength", "Cardio", "Boxing"];

  return (
    <section id="schedule" className="bg-white py-20">
      <div className="w-[90%] md:w-[85%] mx-auto">
        <Heading level="h2">
          Class <span className="text-[#2FB5C0]">Schedule</span>
        </Heading>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Find the perfect class to fit your schedule and fitness goals
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-8">
          {filters.map((f) => (
            <Button
              key={f}
              variant={filter === f ? "primary" : "secondary"}
              onClick={() => setFilter(f)}
            >
              {f === "all" ? "All Classes" : f}
            </Button>
          ))}
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-left">
          {Object.entries(schedule).map(([day, classes]) => {
            const filteredClasses = classes.filter(
              (c) => filter === "all" || c.category === filter
            );

            return (
              <div key={day} className="bg-white rounded-xl shadow-md p-5">
                <h4 className="text-lg font-semibold text-[#2FB5C0] mb-2">{day}</h4>
                <hr className="border-t-2 border-[#2FB5C0] w-12 mb-4" />

                {filteredClasses.length > 0 ? (
                  filteredClasses.map((c, idx) => <ClassCard key={idx} {...c} />)
                ) : (

                  <div
                    className="bg-gray-100 rounded-lg p-3 mb-3 transition-colors duration-300 hover:bg-gray-200"
                  >
                    <p className="text-sm text-gray-500 italic">No Classes</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}