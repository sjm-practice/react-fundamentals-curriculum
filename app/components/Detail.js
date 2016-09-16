'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

var utils = require("../utils/utils");
var convertTemp = utils.convertTemp;

var styles = {
  descriptionContainer: {
    fontSize: 34,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center',
  }
};

function Detail(props) {
  console.log("props in detail:", props);
  return (
    <div style={styles.descriptionContainer}>
      <p>{props.city}</p>
      <p>{props.weather.weather[0].description}</p>
      <p>min temp: {convertTemp(props.weather.temp.min)} degrees</p>
      <p>max temp: {convertTemp(props.weather.temp.max)} degrees</p>
      <p>humidity: {props.weather.humidity}</p>
    </div>
  );
}

Detail.propTypes = {
  weather: PropTypes.object.isRequired,
  city: PropTypes.string,
};
Detail.defaultProps = {};

module.exports = Detail;
