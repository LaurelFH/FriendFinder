//all package dependencies 
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//setting up the app an its port 
var app = express();
//can change this to process.env. 3000 or 8080
var PORT = process.env.PORT || 8080;

//setting up the data parsing for Express 

//double check if this should be set to false/true? 
app.use(bodyParser.urlencoded({extended: true}));
//semicolon at the end of this; ?
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

//use favicon in public folder (can do this with css files too)
app.use(express.static('public'));

//default to the home page needed here too?
//makes sure this pge links/requires out html routing
//same app from express 
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);






/////////////server listen event call 
app.listen(PORT, function(){
	console.log("App is now listening on PORT:" + PORT);
});