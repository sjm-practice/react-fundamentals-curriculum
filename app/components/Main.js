'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  container: {
    width: "100%",
    height: "92%",
  }
};

var Main = React.createClass({
  render: function () {
    return (
      <div style={styles.container}>
        <h1>Main Header</h1>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
