'use strict';

var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require("../components/GetCity");
var WeatherApi = require("../utils/WeatherApi");

var GetCityContainer = React.createClass({
  getDefaultProps: function () {
    return {
      direction: "column",
    };
  },

  propTypes: {
    direction: PropTypes.string,
  },

  getInitialState: function () {
    return {
      city: ""
    };
  },

  handleSubmitCity: function () {
    console.log("sending weather api requests...");
  },

  handleUpdateCity: function (e) {
    this.setState({
      city: e.target.value,
    });
  },

render: function () {
    return (
      <GetCity
        direction={this.props.direction}
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city}
      />
    );
  }
});

module.exports = GetCityContainer;
