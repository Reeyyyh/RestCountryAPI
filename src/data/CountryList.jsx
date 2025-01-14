import React, { useState, useEffect } from "react";

const CountryList = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState(""); // State untuk search query

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
                setError(err.message);
                setLoading(false);
            });
    }, []);

    // Filter data berdasarkan pencarian
    const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
        <div className="p-4">
            {/* Search Bar */}

            <div className="bg-white p-4 shadow rounded-lg mb-4">
                <input
                    type="text"
                    placeholder="Search countries..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 p-3 border border-gray-300 rounded-lg shadow focus:ring focus:ring-blue-300 focus:outline-none"
                />
                {searchQuery && (
                    <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                    </button>
                )}
            </div>


            {/* Hasil Pencarian */}
            {filteredCountries.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredCountries.map((country) => (
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
            ) : (
                <div className="flex justify-center items-center h-96">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                        <h2 className="text-2xl font-bold text-gray-800">No Results Found</h2>
                        <p className="text-gray-600 mt-2">
                            Try adjusting your search query or check the spelling.
                        </p>
                        <div className="mt-4">
                            <button
                                onClick={() => setSearchQuery("")} // Clear search query
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
                            >
                                Reset Search
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CountryList;
