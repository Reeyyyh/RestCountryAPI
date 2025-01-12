import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <div className="w-64 h-screen bg-gray-800 text-white p-4 sticky top-0">
            <h2 className="text-xl font-bold mb-4">Welcome</h2>
            <ul>
                <li className="mb-2">
                    <button
                        className="w-full text-left hover:bg-gray-700 p-2 rounded"
                        onClick={() => navigate("/")}
                    >
                        Home
                    </button>
                </li>
                <li className="mb-2">
                    <button
                        className="w-full text-left hover:bg-gray-700 p-2 rounded"
                        onClick={() => navigate("/about")}
                    >
                        About
                    </button>
                </li>
                <li className="mb-2">
                    <button
                        className="w-full text-left hover:bg-gray-700 p-2 rounded"
                        onClick={() => navigate("/services")}
                    >
                        Services
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
