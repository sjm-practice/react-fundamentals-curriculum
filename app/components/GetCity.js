'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

function GetCity(props) {
  return (
    <div>
      <input
        className="form-control"
        type="text"
       />
      <button
        type="button"
        className="btn btn-success"
      >
        Get Weather
      </button>
    </div>
  );
}

GetCity.propTypes = {};
GetCity.defaultProps = {};

module.exports = GetCity;
