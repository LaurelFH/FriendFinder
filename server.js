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


//get the info from the friend survey form 
app.get("/survey", function(req, res){
	res.sendFile(path.join(__dirname, "survey.html"));
});


app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/home", function(Req, res){
	res.sendFile(path.join(__dirname, "home.html"));
});


//send user to the survey page 
app.get("/survey", function(req, res){
	res.sendFile(path.join(__dirname, "survey.html"));
});


//API
// app.get()

//server listen event call 
app.listen(PORT, function(){
	console.log("App is now listening on PORT:" + PORT);
});