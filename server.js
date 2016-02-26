// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var translateCtrl = require("./controllers/translate.server.Controller.js");
var mongoose = require("mongoose");
var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;

// Create Express App Object \\
var app = express();

// Connector \\
require('./models/translate.server.Model.js')
mongoose.connect('mongodb://localhost/lingo')

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/Public'));

// Routes \\
app.get("/", function(req, res){
  res.sendFile("index.html", {root: "./Public/html"})
});

app.post("/trans", translateCtrl.transData)


app.get("/quiz", function(req, res){
	res.sendFile("quiz.html", {root: "./Public/html"})
})

app.get("/progress", function(req, res){
	res.sendFile("progress.html", {root:"./Public/html"})
})

app.get("/login", function(req, res){
	res.sendFile("login.html", {root:"./Public/html"})
})

app.get('/auth', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { 
  	successRedirect: '/quiz',
    failureRedirect: '/login' 
}));

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/login');
});



// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})