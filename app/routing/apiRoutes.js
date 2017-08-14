// //all package dependencies 
// var express = require("express");
// var bodyParser = require("body-parser");
// var path = require("path");

// //setting up the app an its port 
// var app = express();
// //can change this to process.env. 
// var PORT = process.env.PORT || 3000;


// //setting up the data parsing for Express 
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.text());
// app.use(bodyParser.json({type: "application/vnd.api+json"}));


// //display all possible friends in JSON 
// app.get("/api/friends", function(req, res){
// 	res.json();
// });
	

// app.post("/api/friends", function(req, res){
// 	res.json();
// });