// Data Controller

// Require model
var DataModel = require('../models/translate.server.Model.js')

// Get Data
var getTranslator = function(req, res){
	googleTranslate.translate('My name is Brandon', 'es', function(err, translation) {
	  console.log(translation.translatedText);
	res.send(DataModel.getTranslator);
	}
)}

// Create Data
// var createData = function(req, res){
// 	// Data from client -> req.body
// 	new DataModel.ObjectNameGoesHere(req.body)
// 	res.send('word!!!!!')
	
// }

module.exports = {
	getTranslator : getTranslator,
	// createData : createData
}