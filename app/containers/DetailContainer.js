'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

var Detail = require("../components/Detail");

var DetailContainer = React.createClass({
  render: function () {
    return (
      <Detail />
    );
  }
});

module.exports = DetailContainer;
