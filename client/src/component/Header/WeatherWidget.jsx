import { useEffect, useState } from "react"; // Importing necessary hooks from React

export default function WeatherWidget() {
  // Declaring state variables for weather data and city
  const [weather, setWeather] = useState(null); // To store the weather data
  const city = "New Delhi"; // City is set to "New Delhi" by default

  // Using useEffect hook to fetch weather data whenever the city changes
  useEffect(() => {
    // Fetching weather data from the local API
    fetch(`http://localhost:5000/api/weather/${city}`)
      .then((res) => res.json()) // Parsing the JSON response from the weather API
      .then((data) => setWeather(data)) // Storing the fetched weather data in the state
      .catch((err) => console.error("Error fetching weather", err)); // Handling any fetch errors
  }, [city]); // The effect runs every time the `city` state changes

  // If weather data is not yet available (initial loading state), show a loading message
  if (!weather) return <p className="text-sm text-gray-500">Loading...</p>;

  return (
    <div className="flex items-center gap-3 px-3 py-2 bg-white rounded-lg shadow text-sm text-gray-800 w-full max-w-xs mx-auto">
      {/* Displaying weather icon from the fetched data */}
      <img
        src={weather.current.condition.icon} // Using the weather icon URL from the API response
        alt="weather icon" // Alt text for the image
        className="w-10 h-10" // Styling the icon size (10x10)
      />
      <div className="text-left">
        {/* Displaying the name of the city */}
        <p className="font-semibold leading-none">{weather.location.name}</p>
        {/* Displaying the temperature and weather condition */}
        <p className="text-xs text-gray-600">
          {weather.current.temp_c}°C, {weather.current.condition.text}
        </p>
      </div>
    </div>
  );
}
