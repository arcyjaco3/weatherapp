import React, {useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import fetchWeatherData from '../data/api';



const Navbar = () => {

    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [weatherInfo, setWeatherInfo] = useState(null);



    const checkWeather = async () => {
        try {
          const data = await fetchWeatherData(location);
          setWeatherData(data);
          
        } catch (error) {
          setWeatherData(null);
          alert('Wystąpił błąd podczas pobierania danych pogodowych.');
          console.error('Błąd:', error);
        }
      };

    return (
        <div className="w-1/3 h-full bg-gray-300 text-black flex flex-col justify-between items-center">
            <div className="flex items-center space-x-4 px-10 bg-white rounded-2xl my-4">
                <input
                    type="text"
                    placeholder='Warsaw, Poland'
                    className="rounded-2xl  py-2  w-full focus:none"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                />
                <button
                     type="submit"
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
            <h3 className="text-7xl font-bold">{weatherData && weatherData.current && weatherData.current.temp_c}°C </h3>
                <div className="text-2xl text-gray-500">{weatherData && weatherData.current && weatherData.current.condition.text}</div>
            </div>

            <div className="text-center my-4">
            {weatherData && weatherData.location && weatherData.location.localtime}
            </div>
        </div>
    );
}

export default Navbar;