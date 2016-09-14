'use strict';

var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require("../components/GetCity");

var GetCityContainer = React.createClass({
  render: function () {
    return (
      <GetCity/>
    );
  }
});

module.exports = GetCityContainer;
