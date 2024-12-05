import { useContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./context";

// Importing background images for different weather conditions
import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/sunny.jpg";
import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";

export default function WeatherApp() {
    // Access weather data and loading state from WeatherContext
    const { weatherData, loading } = useContext(WeatherContext);

    // State to manage the background image based on the weather
    const [climateImage, setClimateImage] = useState("");

    // Function to return appropriate background image based on the current climate
    function getBackgroundImage(climate) {
        switch (climate) {
            case "Rain":
                return RainyDayImage;
            case "Clouds":
                return ScatterdCloudsImage;
            case "Clear":
                return ClearSkyImage;
            case "Snow":
                return SnowImage;
            case "Thunder":
                return ThunderStormImage;
            case "Fog":
                return WinterImage;
            case "Haze":
                return FewCloudsImage;
            case "Mist":
                return MistImage;
            default:
                return ClearSkyImage;
        }
    }

    // useEffect hook to update the background image whenever the weatherData.climate changes
    useEffect(() => {
        const bgImage = getBackgroundImage(weatherData.climate);
        setClimateImage(bgImage);
    }, [weatherData.climate]);

    return (
        <>
            {loading.state ? (
                // Show loading message when data is being fetched
                <div className="flex bg-gray-200 rounded-md w-96 p-8 mt-14 mx-auto">
                    <p className="text-center text-3xl text-black">
                        {loading.message}
                    </p>
                </div>
            ) : (
                // Display the main content with dynamic background image
                <div
                    style={{ backgroundImage: `url('${climateImage}')` }}
                    className="grid place-items-center h-screen"
                >
                    <Header />
                    <main>
                        <section>
                            <WeatherBoard />
                        </section>
                    </main>
                </div>
            )}
        </>
    );
}
