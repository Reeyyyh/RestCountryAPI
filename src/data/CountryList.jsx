import React, { useState, useEffect } from "react";

const CountryList = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Tambahkan state error

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch countries");
                }
                return response.json();
            })
            .then((data) => {
                setCountries(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching countries:", err);
                setError(err.message); // Set pesan error
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

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-center">
                    <p className="text-red-500 text-xl font-bold">Oops! Something went wrong.</p>
                    <p className="text-gray-700">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
                    >
                        Retry
                    </button>
                </div>
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
