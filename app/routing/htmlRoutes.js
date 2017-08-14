// //Routes to be exported to other pages , test here first 
// //HTML
// //may want to add the other default (without the user enterign / from Saturday)
// //send the user to the home page

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



// app.get("/", function(req, res){
// 	res.sendFile(path.join(__dirname, "home.html"));
// });

// app.get("/home", function(Req, res){
// 	res.sendFile(path.join(__dirname, "home.html"));
// });


// //send user to the survey page 
// app.get("/survey", function(req, res){
// 	res.sendFile(path.join(__dirname, "survey.html"));
// });
