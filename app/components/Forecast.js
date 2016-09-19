'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

var ForecastDay = require("./ForecastDay");

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  },
};

function Forecast(props) {
  return (
    <div>
      <h1 style={styles.header}>Forecast for {props.city}</h1>
      <div style={styles.container}>
        {props.forecastData.list.map(function (forecastDay) {
          return <ForecastDay
            key={forecastDay.dt}
            unixTimestamp={forecastDay.dt}
            iconName={forecastDay.weather[0].icon}
            onClickForecastDay={props.onClickForecastDay.bind(null, forecastDay)}
          />;
        })}
      </div>
    </div>
  );
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired,
  onClickForecastDay: PropTypes.func.isRequired,
};

module.exports = Forecast;
