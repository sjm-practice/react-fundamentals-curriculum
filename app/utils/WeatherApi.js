var axios = require("axios");

var apiURL = {
  baseURL: "http://api.openweathermap.org/data/2.5/",
  weatherRequest: "weather",
  forecastRequest: "forecast/daily",
  typeParam: "&type=accurate",
  countParam: "&cnt=5",
  apiKey: "429d03f5e4a96a77625782c6ed5f9fcf",
};

function buildCurrentWeatherRequest(city) {
  var currentWeatherRequest =
    apiURL.baseURL +
    apiURL.weatherRequest +
    "?q=" + city +
    apiURL.typeParam +
    "&APPID=" + apiURL.apiKey +
    apiURL.countParam;

  return currentWeatherRequest;
}

function buildForecastRequest(city) {
  var forecastRequest =
    apiURL.baseURL +
    apiURL.forecastRequest +
    "?q=" + city +
    apiURL.typeParam +
    "&APPID=" + apiURL.apiKey +
    apiURL.countParam;

  return forecastRequest;
}

function getCurrentWeather(city) {
  var requestUrl = buildCurrentWeatherRequest(city);

  return axios.get(requestUrl)
    .then(function (weatherResponse) {
      console.log("weather", weatherResponse.data);
      return weatherResponse.data;
    })
    .catch(function (err) {
      console.warn("Error in getCurrentWeather API:", err);
    });
}

function getForecast(city) {
  var requestUrl = buildForecastRequest(city);

  return axios.get(requestUrl)
    .then(function (forecastResponse) {
      console.log("forecast:", forecastResponse.data);
      return forecastResponse.data;
    })
    .catch(function (err) {
      console.warn("Error in getForecast API:", err);
    });
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForecast: getForecast,
};