// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var googleTranslate = require('google-translate')("AIzaSyAXqu2VNsg-JX7XS_e-S74ACZavyPn5gME");
var translateCtrl = require("./controllers/translate.server.Controller.js");

// Create Express App Object \\
var app = express();

// Connector \\
require('./models/translate.server.Model.js')

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/Public'));

// Routes \\
app.get('/', function(req, res){
  res.sendFile("index.html", {root: "./Public/html"})
});


googleTranslate.translate('Your mother was a hampster', 'es', function(err, translation) {
 console.log(translation.translatedText);
 // =>  Mi nombre es Brandon
})

app.get('/translate', translateCtrl.getTranslator)

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})