console.log("app.js is running");

//var template = <p>This is JSX from app.js</p>;
var template = React.createElement(
    "p",
    null,
    "This is JSX from app.js"
  );
var appRoot = document.getElementById("app");

React.render(template, appRoot);