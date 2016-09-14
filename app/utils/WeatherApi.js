
var apiURL = {
  baseURL: "http://api.openweathermap.org/data/2.5/",
  weatherRequest: "weather",
  forecastRequest: "forecast",
  typeParam: "&type=accurate",
  countParam: "&cnt=5",
  apiKey: "429d03f5e4a96a77625782c6ed5f9fcf",
};

function buildCurrentWeatherUrlRequest(city) {
  var currentWeatherRequest =
    apiURL.baseURL +
    apiURL.weatherRequest +
    "?q=" + city +
    apiURL.typeParam +
    "&APPID=" + apiURL.apiKey +
    apiURL.countParam;

  return currentWeatherRequest;
}

function getCurrentWeather(city) {
  return buildCurrentWeatherUrlRequest(city);
}

function getForecast(city) {
  return "to do: " + city;
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForecast: getForecast,
};