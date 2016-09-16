'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

var utils = require("../utils/utils");
var getDate = utils.getDate;
var convertTemp = utils.convertTemp;

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
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  weather: {
    height: 130
  }
};

function ForecastDay(props) {
  var date = getDate(props.dayData.dt);
  var icon = props.dayData.weather[0].icon;

  return (
    <div style={styles.dayContainer} onClick={props.onClickForecastDay}>
      <img src={"./app/images/weather-icons/" + icon + ".svg"} alt="Weather" style={styles.weather}/>
      <h2 style={styles.subheader}>{date}</h2>
    </div>
  );
}

function Forecast(props) {
  console.log(props.forecastData);

  return (
    <div>
      <h1 style={styles.header}>Forecast for {props.city}</h1>
      <div style={styles.container}>
        {props.forecastData.list.map(function (forecastDay) {
          return <ForecastDay
            key={forecastDay.dt}
            dayData={forecastDay}
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
