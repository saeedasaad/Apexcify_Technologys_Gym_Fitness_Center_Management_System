import React from "react";

const ActionsButton = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className="text-sm text-black p-2 border border-gray-300 rounded hover:text-[#2fb5c0] hover:scale-105 cursor-pointer"
        >
            {children}
        </button>
    );
};

export default ActionsButton;