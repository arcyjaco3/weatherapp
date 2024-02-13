import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Weather from './components/Weather';

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [astronomyData, setAstronomyData] = useState(null)
    return (
        <div className="w-full h-screen bg-red-300  flex justify-center items-center">
            <div className="bg-black border-white w-3/4 h-3/4  flex rounded-lg">
                <Navbar setWeatherData={setWeatherData} setAstronomyData={setAstronomyData} />
                <Weather weatherData={weatherData} astronomyData={astronomyData} />
            </div>
        </div>
    );
}

export default App;