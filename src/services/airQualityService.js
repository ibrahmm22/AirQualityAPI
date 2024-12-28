const axios = require('axios');

const fetchAirQuality = async (latitude, longitude, apiKey) => {
    const url = `https://api.airvisual.com/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=${apiKey}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching air quality data:', error);
        throw new Error('Failed to fetch air quality data');
    }
};

module.exports = { fetchAirQuality };
