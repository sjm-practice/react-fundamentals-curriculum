'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

var Forecast = require("../components/Forecast");

var getCityForecast = require("../utils/WeatherApi").getForecast;

function puke(obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>;
}

var ForecastContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      forecast: {}
    };
  },

  componentDidMount: function () {
    getCityForecast(this.props.routeParams.city)
      .then(function (forecast) {
        this.setState({
          forecast: forecast,
          isLoading: false
        });
      }.bind(this));
  },

  render: function () {
    return this.state.isLoading
      ? <h2>Loading...</h2>
      : <div>
          <Forecast city={this.props.routeParams.city} />
          <div>{puke(this.state.forecast)}</div>
        </div>
      ;
  }
});

module.exports = ForecastContainer;
