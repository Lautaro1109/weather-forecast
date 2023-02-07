const dotenv = require('dotenv')

dotenv.config()

const SERVER_PORT = process.env.SERVER_PORT
const API_KEY = process.env.API_KEY
const WEATHER_API_URL = process.env.WEATHER_API_URL

module.exports = {
    SERVER_PORT,
    API_KEY,
    WEATHER_API_URL
}