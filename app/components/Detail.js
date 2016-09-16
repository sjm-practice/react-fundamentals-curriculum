'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

function Detail(props) {
  console.log("props in detail:", props);
  return (
    <div>Detail for {props.city}'s weather.</div>
  );
}

Detail.propTypes = {
  weather: PropTypes.object.isRequired,
  city: PropTypes.string,
};
Detail.defaultProps = {};

module.exports = Detail;
