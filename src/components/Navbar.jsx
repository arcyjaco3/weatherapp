import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import fetchWeatherData from '../data/apiWeather';

const Navbar = ({ setWeatherData, setAstronomyData }) => { // Dodaj setAstronomyData jako props
    const [location, setLocation] = useState('');
    const [weatherData, setLocalWeatherData] = useState(null);

    const checkWeather = async () => {
        try {
            const data = await fetchWeatherData(location);
            setWeatherData(data.currentWeatherData); // Ustaw tylko dane pogodowe
            setLocalWeatherData(data.currentWeatherData); // Ustaw tylko dane pogodowe
            setAstronomyData(data.astronomyData); // Ustaw dane astronomiczne
        } catch (error) {
            setWeatherData(null);
            setLocalWeatherData(null);
            setAstronomyData(null); // Ustaw dane astronomiczne na null w przypadku błędu
            alert('Wystąpił błąd podczas pobierania danych pogodowych.');
            console.error('Błąd:', error);
        }
    };

    return (
        <div className="w-1/3 h-full bg-gray-300 text-black flex flex-col justify-between items-center rounded-lg">
            <div className="flex items-center space-x-4 px-10 bg-white rounded-2xl my-4">
                <input
                    type="text"
                    placeholder='Search'
                    className="rounded-2xl  py-2  w-full focus:none"
                    value={location}
                    onChange={(e) => {
                        setLocation(e.target.value);
                    }
                }
                />
                <button
                    type="button" 
                    onClick={checkWeather}
                >
                    <FaSearch size={20} className="text-blue-700"/>
                </button>
            </div>
            <div className="text-center">
                {weatherData && weatherData.current && (
                    <img
                        src={`https:${weatherData.current.condition.icon}`}
                        alt="Weather Icon"
                        className="w-32 h-32 object-cover rounded-full mx-auto"
                    />
                )}
                <h3 className="text-7xl font-bold">{weatherData && weatherData.current && weatherData.current.temp_c}</h3>
                <div className="text-2xl text-gray-500">{weatherData && weatherData.current && weatherData.current.condition.text}</div>
            </div>

            <div className="text-center my-4">
                {weatherData && weatherData.location && weatherData.location.localtime}
            </div>
        </div>
    );
}

export default Navbar;
