'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

function Forecast(props) {
  return (
    <div>Forecast for {props.city}</div>
  );
}

Forecast.propTypes = {
  city: PropTypes.string,
};

module.exports = Forecast;
