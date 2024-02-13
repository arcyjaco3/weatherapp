import { apiKey } from './config';

const fetchWeatherData = async (location) => {
    let currentWeatherUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
    let astronomyUrl = `https://api.weatherapi.com/v1/astronomy.json?key=${apiKey}&q=${location}`;

    try {
        const [currentWeatherResponse, astronomyResponse] = await Promise.all([
            fetch(currentWeatherUrl),
            fetch(astronomyUrl)
        ]);

        if (!currentWeatherResponse.ok) {
            throw new Error(`Błąd HTTP! Status: ${currentWeatherResponse.status}`);
        }
        if (!astronomyResponse.ok) {
            throw new Error(`Błąd HTTP! Status: ${astronomyResponse.status}`);
        }

        const currentWeatherData = await currentWeatherResponse.json();
        const astronomyData = await astronomyResponse.json();

        return { currentWeatherData, astronomyData };
    } catch (error) {
        throw new Error(`Błąd: ${error.message}`);
    }
};

export default fetchWeatherData;
