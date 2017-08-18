//requires the friends object info from friends
var friends = require('../data/friends.js');

var express = require("express");
var bodyParser = require("body-parser");
var app = express();



//express app 
module.exports = function(app){
//get function to display friend's array in JSON
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});

	// add the new friends to the api
	app.post('/api/friends', function(req, res){
		// console.log(req.body.name);
		var newFriend = req.body;
		console.log(newFriend);
		var newScores =[];

		for(var i = 0; i < newFriend.scores.length; i++){
			newScores.push(parseInt(newFriend.scores[i]));
		}

		newFriend.scores = newScores;
		friends.push(newFriend);
		// res.json(newFriend);
});


}



