// Data Controller
var fs = require('fs')
var ApiKey = fs.readFileSync('apiKey.txt', 'utf-8')
console.log("ApiKey:",ApiKey)
// Require model

var DataModel = require('../models/translate.server.Model.js')
var googleTranslate = require('google-translate')(ApiKey);

function transData (req, res){
	console.log(req.body)
	googleTranslate.translate(req.body.text, 'es', function(err, translation) {
			console.log(err)

	 res.send(translation.translatedText)
	})
}

module.exports = {
	transData : transData,
}