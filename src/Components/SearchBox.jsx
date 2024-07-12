import React, { useState } from 'react';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css';

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState('');

    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = '395f6165b8e6ab1a6710543f4fbdeaf9';

    const getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather_desc: jsonResponse.weather[0].description,
                windSpeed: jsonResponse.wind.speed,
                timestamp: jsonResponse.dt, // Current timestamp from the API response
            };
            return result;
        } catch (error) {
            alert('No such place exists! Please enter correct location.');
        }
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        setCity('');
    };

    return (
        <div className="Search">
            <form onSubmit={handleSubmit}>
                <div className="SearchIconWrapper">
                    <SearchIcon />
                </div>
                <InputBase
                    className="StyledInputBase"
                    placeholder="Search City Name…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={city}
                    onChange={handleChange}
                />
            </form>
        </div>
    );
}