# Whats The Weather?

Objective: Use Node.js's http module to make HTTP requests to Open Weather Map, and parse the response object to fetch the current weather of a city.

## Exercise

Write a Node.js script called weather.js that takes a city as the first argument, and prints the current temperature in that city.

Here is a sample API call which returns the weather for San Francisco http://api.openweathermap.org/data/2.5/weather?q=San+Francisco&mode=json&appid=498fa131dbb425c13df97463ab9d22dd

Example usage

```
$ node weather.js "San Franciso"
Temperature in Farenheit: 85.244
```

Requirements:
- Use Node.js's http module to make a request to http://api.openweathermap.com
