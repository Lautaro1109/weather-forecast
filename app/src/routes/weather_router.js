const express = require('express');
const router = express.Router();
const weather_controller = require('../controllers/weather_controller')

router.post('/data', async function (req, res, next) {
    weather_controller.getWeatherData(req.body.city, req.body.forecastdays)
        .then(result => res.status(200).send(result.data))
        .catch(error => res.status(400).send(error))
});





module.exports = router;
