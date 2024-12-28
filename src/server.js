const express = require('express');
const { airQualityRouter } = require('./routes/airQuality');
const { connectToDatabase } = require('./utils/database');
const scheduleCronJobs = require('./utils/cron');

// Initialize express app
const app = express();
app.use(express.json());

// Validate environment variables
if (!process.env.PORT) {
    console.error('Error: PORT is not defined in the environment variables.');
    process.exit(1);
}

// Connect to the database
connectToDatabase().catch((err) => {
    console.error('Critical database connection error:', err);
    process.exit(1);
});

// Use air quality routes
app.use('/api', airQualityRouter);

// Schedule CRON jobs
scheduleCronJobs();

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
