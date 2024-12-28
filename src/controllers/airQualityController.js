const { fetchAirQuality } = require('../services/airQualityService');

/**
 * Controller to handle fetching air quality data
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getAirQuality = async (req, res) => {
    const { latitude, longitude } = req.query;

    // Validate input
    if (!latitude || !longitude) {
        return res.status(400).json({
            error: 'Latitude and Longitude are required for fetching air quality data.',
        });
    }

    try {
        // Fetch air quality data from the service
        const data = await fetchAirQuality(latitude, longitude, process.env.AIR_QUALITY_API_KEY);
        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Error fetching air quality data:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch air quality data. Please try again later.',
        });
    }
};

module.exports = { getAirQuality };
