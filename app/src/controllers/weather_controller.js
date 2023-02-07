const axios = require('axios')
const config = require('../core/config')


const getWeatherData = async (city, forecastdays) => await axios.get(`${config.WEATHER_API_URL}?city=${city}&key=${config.API_KEY}&days=${Number(forecastdays)}`)



module.exports = {
    getWeatherData
}