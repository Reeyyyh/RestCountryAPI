import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen">
            
            {/* Sidebar */}
            <Sidebar />

            {/* Content Area */}
            <div className="flex flex-col flex-grow relative">
                {/* Header */}
                <Header />

                {/* Main Content */}
                <main className="flex-grow p-6 overflow-y-auto mb-16">
                    {children}
                </main>

                {/* Footer */}
                <Footer />
            </div>

        </div>
    );
};

export default Layout;
