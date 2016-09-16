'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

var Forecast = require("../components/Forecast");

var getCityForecast = require("../utils/WeatherApi").getForecast;

var ForecastContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      forecastData: {}
    };
  },

  componentDidMount: function () {
    getCityForecast(this.props.routeParams.city)
      .then(function (forecastData) {
        this.setState({
          forecastData: forecastData,
          isLoading: false
        });
      }.bind(this));
  },

  render: function () {
    return this.state.isLoading
      ? <h2>Loading...</h2>
      : <Forecast
          city={this.props.routeParams.city}
          forecastData={this.state.forecastData}
        />
      ;
  }
});

module.exports = ForecastContainer;
