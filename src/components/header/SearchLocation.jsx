import React, { useContext } from 'react';
import SearchIcon from "../../assets/search.svg";
import { LocationContext } from '../../context';
import { getLocationByName } from '../../data/location-data';

export default function SearchLocation() {
    const { setSelectedLocation } = useContext(LocationContext);

    // Handle form submission to search for a location
    function handleSubmit(e) {
        e.preventDefault();
        const value = e.target.elements.searchInput.value.trim(); // Get input value by name and trim whitespace
        const fetchedLocation = getLocationByName(value);

        // Update the selected location context
        if (fetchedLocation) {
            setSelectedLocation({ ...fetchedLocation });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input
                    name="searchInput" // Add name to input for easy access in handleSubmit
                    className="bg-transparent placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search"
                    placeholder="Search Location"
                    required
                />
                <button type="submit">
                    <img src={SearchIcon} alt="Search" />
                </button>
            </div>
        </form>
    );
}
