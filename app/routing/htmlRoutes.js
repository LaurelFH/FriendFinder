// //Routes to be exported to other pages , test here first 
// //HTML
// //may want to add the other default (without the user enterign / from Saturday)
// //send the user to the home page
var path = require("path");
module.exports = function(app){};






//default page if nothing entered 
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, + "/home.html"));
});

//routes the user home page 
app.get("/home", function(Req, res){
	res.sendFile(path.join(__dirname, + "/home.html"));
});


//get the info from the friend survey form 
app.get("/survey", function(req, res){
	res.sendFile(path.join(__dirname, + "/survey.html"));
});