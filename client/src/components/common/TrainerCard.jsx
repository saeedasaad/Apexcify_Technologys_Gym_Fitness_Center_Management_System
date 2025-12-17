import React from "react";

export default function TrainerCard({ image, name, specialty, socials }) {
    return (
        <div className="flex flex-col items-center text-center p-6 relative">
            <div className="relative">
                {/* Image */}
                <div className="relative w-[150px] h-[150px] rounded-full border-4 border-[#2FB5C0] overflow-hidden shadow-2xl shadow-black/70 mb-4 transition-transform duration-300 hover:scale-105">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />

                </div>
                <button
                    className="absolute left-1/2 top-[76%] -translate-x-1/2 bg-[#2FB5C0] text-white px-5 py-1 rounded-full text-sm font-semibold shadow-md pointer-events-none z-10">
                    Certified
                </button>
            </div>

            {/* Content */}
            <div>
                <h4 className="text-lg font-semibold mb-1">{name}</h4>
                <h6 className="text-sm text-[#2FB5C0] mb-4">{specialty}</h6>

                {/* Socials */}
                <div className="flex justify-center gap-4 mt-2">
                    {socials.map((icon, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 hover:bg-[#2FB5C0] hover:scale-110"
                        >
                            <i className={icon}></i>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}