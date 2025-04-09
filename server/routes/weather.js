// Importing necessary modules
import express from "express";  // Express is used to handle HTTP requests and routing.
import fetch from "node-fetch";  // 'node-fetch' is used for making HTTP requests from Node.js.
import dotenv from "dotenv";  // dotenv is used to load environment variables from a .env file.

dotenv.config();  // This loads the environment variables from the .env file into process.env.
const router = express.Router();  // Creating a new router instance to handle the routes.

// Retrieving the API key from environment variables
const API_KEY = process.env.WEATHER_API_KEY;  // The API key for the weather service is retrieved from .env.

// Route handler for GET requests to "/:city", where :city is a dynamic parameter.
router.get("/:city", async (req, res) => {
  const city = req.params.city;  // Extracting the city parameter from the URL.

  try {
    // Fetching current weather data for the city using the Weather API
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`  // API call to the weather service
    );

    const text = await response.text();  // Converting the API response into text (it might be JSON format).

    // Setting the response header and sending the weather data back to the client as JSON
    res.setHeader("Content-Type", "application/json");  // Setting the response content type to JSON.
    res.send(text);  // Sending the fetched weather data to the client.

  } catch (error) {
    // Catching any errors and sending a failure response back to the client.
    console.error("Weather fetch error:", error);  // Logging the error to the console.
    res.status(500).json({ error: "Failed to fetch weather" });  // Sending an error response with a 500 status code.
  }
});

// Exporting the router so it can be used in the main application file (e.g., app.js)
export default router;
