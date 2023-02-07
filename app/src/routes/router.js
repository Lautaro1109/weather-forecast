const { Router } = require('express')

const weather_router = require('./weather_router')

const routes = Router()

routes.use('/weather', weather_router)

module.exports = routes