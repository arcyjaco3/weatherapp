import React from 'react';

const Weather = ({ weatherData, astronomyData }) => {

    const isWeatherDataAvailable = weatherData && weatherData.current;
    const isAstronomyDataAvailable = astronomyData && astronomyData.astronomy;

    return (
        <div className="w-2/3 h-full bg-white flex justify-center items-center text-white rounded-lg">
            <div className="grid grid-cols-3 grid-rows-3 gap-20">
                {isWeatherDataAvailable && (
                    <WeatherCard title="Wind" value={`${weatherData.current.wind_kph} km/h`} description={weatherData.current.wind_dir} />
                )}
                {isWeatherDataAvailable && (
                    <WeatherCard title="Humidity" value={`${weatherData.current.humidity}%`} />
                )}
                {isWeatherDataAvailable && (
                    <WeatherCard title="Real Feel" value={weatherData.current.feelslike_c} />
                )}
                {isWeatherDataAvailable && (
                    <WeatherCard title="UV Index" value={weatherData.current.uv} />
                )}
                {isWeatherDataAvailable && (
                    <WeatherCard title="Pressure" value={weatherData.current.pressure_mb} />
                )}
                {isAstronomyDataAvailable && (
                    <WeatherCard title="Sunrise" value={astronomyData.astronomy.astro.sunrise} />
                )}
                {isAstronomyDataAvailable && (
                    <WeatherCard title="Sunset" value={astronomyData.astronomy.astro.sunset} />
                )}
                {isAstronomyDataAvailable && (
                    <WeatherCard title="Moonrise" value={astronomyData.astronomy.astro.moonrise} />
                )}
                {isAstronomyDataAvailable && (
                    <WeatherCard title="Moonset" value={astronomyData.astronomy.astro.moonset} />
                )}
            </div>
        </div>
    );
}

const WeatherCard = ({ title, value, description }) => (
    <div className="bg-indigo-300 w-52 h-full text-center py-5 rounded-lg">
        <h3 className="uppercase my-2">{title}</h3>
        <p className="text-2xl bold my-2">{value}</p>
        {description && <p>{description}</p>}
    </div>
);

export default Weather;
