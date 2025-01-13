import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="w-64 h-screen bg-gray-800 text-white p-4 sticky top-0">
            <h2 className="text-xl font-bold mb-4">Welcome</h2>
            <ul>
                <li
                    className={`mb-2 font-bold ${
                        isActive("/") ? "bg-blue-600 rounded-lg" : ""
                    }`}
                >
                    <button
                        className="w-full text-left hover:bg-blue-700 p-2 rounded-lg"
                        onClick={() => navigate("/")}
                    >
                        Home
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
