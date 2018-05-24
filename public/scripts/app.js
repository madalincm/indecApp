'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Test App'
    ),
    React.createElement(
        'p',
        null,
        'test description'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            '1'
        ),
        React.createElement(
            'li',
            null,
            '2'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Madalin'
    ),
    React.createElement(
        'p',
        null,
        'Age: 26'
    ),
    React.createElement(
        'p',
        null,
        'Location: Baia Mare'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
