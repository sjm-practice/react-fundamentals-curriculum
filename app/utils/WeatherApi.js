
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
  return buildCurrentWeatherRequest(city);
}

function getForecast(city) {
  return buildForecastRequest(city);
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForecast: getForecast,
};