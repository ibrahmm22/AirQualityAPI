# Air Quality API

This project provides a REST API to fetch air quality data using the IQAir API and automate fetching air quality data for Paris using a CRON job.

## Features
1. Fetch air quality data by latitude and longitude.
2. Automate fetching air quality data for Paris every minute using a CRON job.
3. Retrieve the most polluted datetime for Paris.

## Requirements
- **Node.js** (v18 or higher)
- **MongoDB**
- **Docker** and **Docker Compose** (optional for containerization)
- **IQAir API Key**

## Installation

### Without Docker
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/air-quality-api.git
   cd air-quality-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables in `.env` file:
   ```bash
   IQAIR_API_KEY=your_api_key_here
   MONGO_URI=mongodb://localhost:27017/airquality
   ```

4. Start the server:
   ```bash
   npm start
   ```

### With Docker
1. Build and run the Docker containers:
   ```bash
   docker compose up --build
   ```

2. The server will be available at `http://localhost:3000`.

## Usage
### Endpoints
1. **GET /api/airquality**
   - Fetch air quality data for given latitude and longitude.

2. **CRON Job**
   - Automatically fetch air quality data for Paris every minute.

## Testing
1. Run unit tests:
   ```bash
   npm test
   ```

## License
This project is licensed under the MIT License.
