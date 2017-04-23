var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'dick',
  location: 'funkytown'
};

var objTwo = {
  age:25,
  // Add properties of objOne using ...
  ...objOne
};

console.log(objTwo);

ReactDOM.render(
  <h1>Boilerplate app!</h1>,
  document.getElementById('app')
);
