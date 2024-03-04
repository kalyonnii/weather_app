// frontend/src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Weather Forecast</h2>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="border border-gray-300 rounded px-4 py-2 w-full mb-4"
        />
        <button
          onClick={fetchWeatherData}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Get Weather
        </button>
        {weatherData && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Weather in {weatherData.name}</h3>
            <p>Temperature: {weatherData.main.temp} K</p>
            <p>Pressure: {weatherData.main.pressure} hPa</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
