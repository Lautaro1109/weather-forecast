const express = require('express')
const path = require('path')
const config = require('./src/core/config')
const http = require('http')
const cors = require('cors')
const ejs = require('ejs')
const routes = require('./src/routes/router')

const port = config.SERVER_PORT
const app = express()
const server = http.createServer(app)

app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.use(
  express.urlencoded({
    extended: true,
    limit: '50mb'
  })
)
app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/', routes)

server.listen(port, () => {
  console.log(`Running Server On Port ${port}`)
})

module.exports = app
