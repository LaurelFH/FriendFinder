//requires the friends object info from friends
var friends = require('../data/friends.js');


//express app 
module.exports = function(app){
//get function to display friend's array in JSON
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});

}




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

// var path = require("path");
// module.exports = function(app){};



//create new friends for the api 
// app.post("/api/new", function(req, res){
// 	var newFriend = req.body;
// 	newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
// 	console.log(newFriend);
// 	friends.push(newFriend);
// 	res.json(newFriend);
// });
