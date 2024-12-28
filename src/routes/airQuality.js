const express = require('express');
const { getAirQuality } = require('../controllers/airQualityController');

const airQualityRouter = express.Router();

// Route: GET /api/airquality
airQualityRouter.get('/airquality', getAirQuality);

module.exports = airQualityRouter;
