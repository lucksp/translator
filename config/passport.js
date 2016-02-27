var FacebookStrategy = require('passport-facebook').Strategy;
var configAuth = require('./auth');
var passport         = require('passport')
var newUser       = require('../models/user');
var FacebookStrategy = require('passport-facebook').Strategy;

// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
}

passport.use(new FacebookStrategy({
    clientID        : configAuth.facebookAuth.clientID,
    clientSecret    : configAuth.facebookAuth.clientSecret,
    callbackURL     : configAuth.facebookAuth.callbackURL,
    profileFields   : ['email']
},
  // facebook will send back the token and profile
    function(token, refreshToken, profile, done) {

        // asynchronous
console.log(profile)

            // find the user in the database based on their facebook id
            newUser.findOne({ 'facebook.id' : profile.id }, function(err, user) {

                // if there is an error, stop everything and return that
                // ie an error connecting to the database
                if (err)
                    return done(err);

                // if the user is found, then log them in
                if (user) {
                    return done(null, user); // user found, return that user
                } else {
                    // if there is no user found with that facebook id, create them
                    var User            = new newUser();
                    // set all of the facebook information in our user model
                    User.facebook.id    = profile.id; // set the users facebook id                   
                    User.facebook.token = token; // we will save the token that facebook provides to the user                    
                    User.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
                    User.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

                    // save our user to the database
                    User.save(function(err) {
                        if (err)
                            throw err;

                        // if successful, return the new user
                        return done(null, User);
                    });
                }

            });


    }));

