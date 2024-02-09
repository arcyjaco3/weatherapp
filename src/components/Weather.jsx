import React from 'react'


const Weather = ({weatherData}) => {

    return ( 
        <div className="w-2/3 h-full bg-white flex justify-center items-center text-white">
            <div className="grid grid-cols-3 grid-rows-3 gap-20">
                {(weatherData && weatherData.current && (
                    <div className="bg-indigo-300 w-52 h-full text-center py-5 rounded-lg">
                        <h3 className="uppercase my-2">Wind</h3>
                        <p className="text-2xl bold my-2 ">{weatherData.current.wind_kph} km/h</p>
                        <p>{weatherData.current.wind_dir}</p>
                    </div>
                ))}
                {(weatherData && weatherData.current && (
                <div
                     id="humdity" 
                     className="bg-indigo-300 text-center rounded-lg py-5">
                    <h3 className='uppercase my-2'>Humdity</h3>
                    <p className="text-2xl bold my-2 ">{weatherData.current.humidity}%</p>
                    
                </div>
                ))}
                {(weatherData && weatherData.current && (
                <div 
                    id="realfeel" 
                    className="bg-indigo-300 text-center rounded-lg py-5"
                >
                    <h3>Real Feel</h3>
                    <p className="text-2xl bold my-2">{weatherData.current.feelslike_c}</p>
                </div>
                ))}
                 {(weatherData && weatherData.current && (
                <div 
                    id="realfeel" 
                    className="bg-indigo-300 text-center rounded-lg py-5"
                >
                    <h3>UV Index</h3>
                    <p className="text-2xl bold my-2">{weatherData.current.uv}</p>
                </div>
                ))}
                 {(weatherData && weatherData.current && (
                <div
                     id="realfeel"
                     className="bg-indigo-300 text-center rounded-lg py-5">
                    <h3>Pressure</h3>
                    <p className="text-2xl bold my-2">{weatherData.current.pressure_mb}</p>
                </div>
                ))}
                {/* Change of rain ??? */}
                {/* ------------------------ */}
                  {(weatherData && weatherData.current && (
                <div 
                    id="realfeel" 
                    className="bg-indigo-300 text-center rounded-lg py-5"
                >
                    <h3>Change of Rain</h3>
                    <p className="text-2xl bold my-2">{weatherData.current.pressure_mb}</p> 
                </div>
                // -----------------------------------
                ))}
                  {(weatherData && weatherData.current && (
                <div 
                    id="realfeel" 
                    className="bg-indigo-300 text-center rounded-lg py-5"
                >
                    <h3>Temperature history</h3>
                    <p className="text-2xl bold my-2">{weatherData.current.pressure_mb}</p>
                </div>
                ))}
                  {(weatherData && weatherData.current && (
                <div
                    id="realfeel" 
                    className="bg-indigo-300 text-center rounded-lg py-5"
                >
                    <h3>Sun</h3>
                    <p className="text-2xl bold my-2">{weatherData.current.pressure_mb}</p>
                </div>
                ))}
                  {(weatherData && weatherData.current && (
                <div 
                    id="realfeel" 
                    className="bg-indigo-300 text-center rounded-lg py-5"
                >
                    <h3>Moon</h3>
                    <p className="text-2xl bold my-2">{weatherData.current.pressure_mb}</p>
                </div>
                ))}
                
            </div>
        </div>
     );
}
 
export default Weather;