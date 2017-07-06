require('dotenv').config()
const http = require('http')

const cityInput = process.argv[2]

const options = {
  method: 'GET',
  hostname: 'api.openweathermap.org',
  path: `/data/2.5/weather?q=${cityInput}`&`APPID=process.env.CONSUMER_KEY`
}

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`)
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`)
  res.setEncoding('utf-8')
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`)
  })
  res.on('end', () => {
    console.log('No more data in response')
  })
})

req.on('error', (error) => {
  console.log(`problem with request: ${error.message}`)
})

req.end()
