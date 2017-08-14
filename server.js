//all package dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//setting up the app an its port 
var app = express();
//can change this to process.env. 
var PORT = process.env.PORT || 3000;

//setting up the data parsing for Express 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

//logic for the new friend add etc.  




/////////////server listen event call 
app.listen(PORT, function(){
	console.log("App is now listening on PORT:" + PORT);
});