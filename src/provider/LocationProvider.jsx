import { useState } from "react";
import { LocationContext } from "../context";

// Context provider for managing selected location state
const LocationProvider = ({ children }) => {
    // State to manage the selected location with default values
    const [selectedLocation, setSelectedLocation] = useState({
        location: "",
        latitude: 0,
        longitude: 0,
    });

    return (
        <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
            {children}
        </LocationContext.Provider>
    );
};

export default LocationProvider;
