import React, { useState, useEffect } from "react";

const CountryList = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => {
                setCountries(data);
                console.log(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching countries:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {countries.map((country) => (
                <div
                    key={country.cca3}
                    className="border p-4 rounded shadow hover:shadow-lg"
                >
                    <h2 className="text-lg font-bold">{country.name.common}</h2>
                    <img
                        src={country.flags.svg}
                        alt={`${country.name.common} flag`}
                        className="w-full h-40 object-cover rounded mt-2"
                    />
                    <p>Region: <strong>{country.region}</strong></p>
                    <p>Population: <strong>{country.population.toLocaleString()}</strong></p>
                    <p>Capital: <strong>{country.capital}</strong></p>
                </div>
            ))}
        </div>
    );
};

export default CountryList;
