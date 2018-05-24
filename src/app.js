console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
<div>
    <h1>Test App</h1>
    <p>test description</p> 
    <ol>
        <li>1</li>
        <li>2</li>
    </ol>       
</div>
);

var templateTwo = (
    <div>
        <h1>Madalin</h1>
        <p>Age: 26</p>
        <p>Location: Baia Mare</p>
    </div>    
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
