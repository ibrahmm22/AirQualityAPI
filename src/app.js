const express = require('express');
const helmet = require('helmet'); // For enhanced security
const airQualityRoutes = require('./routes/airQualityRoutes');

const app = express();

// Middleware for security headers
app.use(helmet());

// Middleware to parse JSON requests
app.use(express.json());

// API Routes
app.use('/api', airQualityRoutes);

// Export the app module
module.exports = app;
