require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');
const { scheduleParisAirQuality } = require('./cron/airQualityCron');

// Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully'))
    .catch(err => {
        console.error('Database connection error:', err);
        process.exit(1); // Exit the process in case of a critical failure
    });

// Start CRON Jobs
scheduleParisAirQuality();

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
