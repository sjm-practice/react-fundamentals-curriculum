'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

var utils = require("../utils/utils");
var getDate = utils.getDate;

var styles = {
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  subHeader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  weather: {
    height: 130
  }
};


function ForecastDay(props) {
  var date = getDate(props.unixTimestamp);


  return (
    <div style={styles.dayContainer} onClick={props.onClickForecastDay}>
      <img src={"./app/images/weather-icons/" + props.iconName + ".svg"} alt="Weather" style={styles.weather}/>
      <h2 style={styles.subHeader}>{date}</h2>
    </div>
  );
}

ForecastDay.propTypes = {
  unixTimestamp: PropTypes.number.isRequired,
  iconName: PropTypes.string.isRequired,
  onClickForecastDay: PropTypes.func.isRequired,
};

module.exports = ForecastDay;
