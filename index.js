// const config = require('./config.js')
const http = require('http')
const weather = require('openweather-node')

weather.setAPPID('89f1c016380fc4077b547f8b59a1b70f')

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
