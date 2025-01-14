import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showBackToTop, setShowBackToTop] = useState(false);

    const isActive = (path) => location.pathname === path;

    const handleHomeClick = () => {
        navigate("/"); // Navigasi ke halaman Home tanpa penanganan scroll
    };

    const handleBackToTopClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Menambahkan animasi scroll ke atas
        });
    };
    

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="w-64 h-screen bg-gray-800 text-white p-4 sticky top-0 flex flex-col">
            <h2 className="text-xl font-bold mb-4">Welcome</h2>
            <ul className="flex flex-col flex-grow">
                <li
                    className={`mb-2 font-bold ${
                        isActive("/") ? "bg-blue-600 rounded-lg" : ""
                    }`}
                >
                    <button
                        className="w-full text-left hover:bg-blue-700 p-2 rounded-lg"
                        onClick={handleHomeClick}
                    >
                        Home
                    </button>
                </li>
            </ul>

            {/* Tombol Back to Top sebagai item dalam list */}
            {showBackToTop && (
                <div className="mt-auto">
                <button
                    onClick={handleBackToTopClick}
                    className="w-full text-left bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 focus:outline-none shadow-lg hover:shadow-xl active:scale-100"
                >
                    <span className="flex justify-center items-center">
                        <span className="mr-2">↑</span>
                        Back to Top
                    </span>
                </button>
            </div>
            
            )}
        </div>
    );
};

export default Sidebar;
