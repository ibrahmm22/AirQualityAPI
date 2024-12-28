const cron = require('node-cron');
const AirQuality = require('../models/AirQuality');
const { fetchAirQuality } = require('../services/airQualityService');

const scheduleParisAirQuality = () => {
    cron.schedule('* * * * *', async () => {
        const latitude = 48.856613;
        const longitude = 2.352222;
        try {
            const data = await fetchAirQuality(latitude, longitude, process.env.AIR_QUALITY_API_KEY);
            const record = new AirQuality({
                city: data.data.city,
                aqi: data.data.current.pollution.aqius,
                datetime: new Date(),
            });
            await record.save();
            console.log('Air quality data saved for Paris');
        } catch (error) {
            console.error('Error fetching data for Paris:', error);
        }
    });
};

module.exports = { scheduleParisAirQuality };
