// //Routes to be exported to other pages , test here first 
// //HTML
// //may want to add the other default (without the user enterign / from Saturday)
// //send the user to the home page
var path = require('path');
module.exports = function(app){

	//default to home page if nothing entered 
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

	//routes the user to the home page if they enter home
	app.get('/home', function(Req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

	//sets the defualt page to the home page in general
	// app.use(function(req, res){
	// 	res.sendFile(path.join(__dirname + '/../public/home.html'));
	// });

	//get the info from the friend survey form 
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

}



