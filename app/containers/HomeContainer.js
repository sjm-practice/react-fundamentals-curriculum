'use strict';

var React = require('react');
var PropTypes = React.PropTypes;
var Home = require("../components/Home");

var HomeContainer = React.createClass({
  render: function () {
    return (
      <Home />
    );
  }
});

module.exports = HomeContainer;
