const request = require('supertest');
const app = require('../src/app'); // Corrected the app import path

describe('Air Quality API Tests', () => {
    describe('GET /api/airquality', () => {
        it('should return air quality data when valid coordinates are provided', async () => {
            const response = await request(app)
                .get('/api/airquality?latitude=48.856613&longitude=2.352222');
            
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('data');
            expect(response.body.data).toHaveProperty('city');
            expect(response.body.data).toHaveProperty('current.pollution.aqius');
        });

        it('should return 400 if latitude or longitude is missing', async () => {
            const response = await request(app).get('/api/airquality');
            expect(response.status).toBe(400);
            expect(response.body.error).toBe('Latitude and Longitude are required');
        });

        it('should return 500 if the external API fails', async () => {
            // Mock the fetchAirQuality service to throw an error
            jest.mock('../src/services/airQualityService', () => ({
                fetchAirQuality: jest.fn().mockRejectedValue(new Error('External API failed')),
            }));
            
            const response = await request(app)
                .get('/api/airquality?latitude=48.856613&longitude=2.352222');
            
            expect(response.status).toBe(500);
            expect(response.body.error).toBe('Failed to fetch air quality data');
        });
    });
});
