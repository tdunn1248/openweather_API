require('dotenv').config()
const http = require('http')

const apiKey = process.env.CONSUMER_KEY
const cityInput = process.argv[2]

const options = {
  method: 'GET',
  hostname: 'www.api.openweathermap.org',
  path: `/data/2.5/weather?q=${cityInput}`
}



const req = http.request(options, (res) => {
  console.log('res', res)

  req.on('error', (error) => {
    console.log(error)
  })
})

module.exports = apiKey
