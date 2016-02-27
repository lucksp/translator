var mongoose = require("mongoose");
require('../config/passport.js')


var userSchema = mongoose.Schema({
	facebook         : {
        id           : String,
        token        : String,
        name         : String,
        email        : String
    }
    })

module.exports = mongoose.model('newUser', userSchema)
