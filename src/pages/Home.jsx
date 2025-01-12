import React from "react";
import CountryList from "../data/CountryList";

const Home = () => {
    return (
        <div className="overflow-y-auto">
            <CountryList />
        </div>
    );
};

export default Home;
