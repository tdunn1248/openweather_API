const http = require('http')
const weather = require('openweather-node')
require('dotenv').config()

weather.setAPPID(process.env.CONSUMER_KEY)

weather.now(process.argv[2], function(err, weather) {
  if (err) throw err
  else
  {
    const kelvin = weather.values.main.temp
    const fahrenheit = kelvin * (9/5) - 459.67
    console.log('fahrenheit',fahrenheit)
    return fahrenheit
  }
})
