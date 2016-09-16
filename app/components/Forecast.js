'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

function puke(obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>;
}

function Forecast(props) {
  return (
    <div>

    <div>Forecast for {props.city}</div>
      <div>{puke(props.forecastData)}</div>
    </div>
  );
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired,
};

module.exports = Forecast;
