
import React, { useState } from "react";
import axios from "axios";

function WeatherComponent() {
	const [city, setCity] = useState("");
	const [weather, setWeather] = useState({});
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState(null);

	function handleSubmit(event) {
		event.preventDefault();
		let apiKey = "cf6b50b908fa2e0baca3eed8a569a5f6";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

		axios
			.get(apiUrl)
			.then((response) => {
				// Assuming displayWeather is a function that updates the state with weather data
				displayWeather(response.data);
			})
			.catch((error) => {
				console.error("Weather API request failed:", error);
				setError("Failed to fetch weather data. Please try again.");
			});
	}

	function displayWeather(data) {
		// Assuming this function updates the state with the weather data
		setWeather({
			temperature: data.main.temp,
			humidity: data.main.humidity,
			wind: data.wind.speed,
			icon: data.weather[0].icon,
			description: data.weather[0].description,
		});
		setLoaded(true);
	}

	function updateCity(event) {
		setCity(event.target.value);
	}

	let form = (
		<form onSubmit={handleSubmit}>
			<input
				type="search"
				placeholder="Enter a City...."
				onChange={updateCity}
			/>
			<button type="submit">Search</button>
		</form>
	);

	if (loaded) {
		return (
			<div>
				{form}
				<ul>
					<li>Temperature: {Math.round(weather.temperature)}°C</li>
					<li>Humidity: {Math.round(weather.humidity)}%</li>
					<li>Wind: {Math.round(weather.wind)}km/h</li>
					<li>
						<img src={weather.icon} alt={weather.description} />
					</li>
				</ul>
			</div>
		);
	} else {
		return (
			<div>
				{form}
				{error && <p>{error}</p>}
				{loaded === false && !error && <p>Loading...</p>}
			</div>
		);
	
}

      <footer>
        <p>
          This project is open source. Check it out on{' '}
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>.
        </p>
      </footer>
    

}
export default WeatherComponent;

