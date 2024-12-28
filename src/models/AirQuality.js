const mongoose = require('mongoose');

const airQualitySchema = new mongoose.Schema({
    city: String,
    aqi: Number,
    datetime: Date,
});

module.exports = mongoose.model('AirQuality', airQualitySchema);
