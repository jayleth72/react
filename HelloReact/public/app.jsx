var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = 'Legend';
// var messageOutput = 'Wow man you are a legend'

ReactDOM.render(
  <Greeter name={firstName} />,
  document.getElementById('app')
);
