const User = require('../models/user');
// Passport for Authentication
const passport = require('passport');
const LocalStrategy = require('passport-local');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Data Encryption
const bcrypt = require('bcrypt');
const saltRounds = 10;
const CLIENT_URL = 'http://localhost:3000';

passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:8000/api/auth/google/notesfly',
    userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
  },
  function (accessToken, refreshToken, profile, done) {
    User.findOne({googleId: profile.id}).then((object) => {
      if(!object) {
        const user = new User({
          fName: profile.name.givenName,
          lName: profile.name.familyName,
          googleId: profile.id,
          mail: profile.emails[0].value
        })
        User.create(user).then((data) => {
          console.log(data);
        }).catch((err) => {
          console.log(err)
        });
      }
    });
    done(null, profile);
  }
));

// Create a Passport Strategy, done is a callback function
passport.use(
  new LocalStrategy((mail, password, done) => {
    console.log(mail);
    User.findOne({mail: username}).then(user => {
      if (!user) {
        return done(null, false, { message: "Incorrect Username" })
      }
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) { return done(null, user) }
        else {
          return done(null, false, { message: "Incorrect Password" })
        }
      }).catch((err) => { return done(err) });
    }).catch((err) => { return done(err) });
}));

passport.serializeUser((user,done)=>{
  done(null,user);
});

passport.deserializeUser((user,done)=>{
  done(null,user);
});


exports.createAccount = (req, res) => {
  User.findOne({mail: req.body.mail}).then((object) => {
    if(!object) {
      bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        req.body.password = hash;
        User.create(req.body).then((data) => {
          console.log(data);
          res.status(200).json({message: 'Successfully created user Account'});
        }).catch((err) => {
          console.log(err)
          res.status(400).json({
            message: 'unable to create user account',
            error: err.message
          })
        });
      })
    }
    else {
      res.status(200).json({message: 'account validated successfully'});
    }
  });
};

exports.googleOAuth = passport.authenticate('google', {
  scope: ['profile', 'email']
});

exports.googleCallback = passport.authenticate('google', {
  successRedirect: CLIENT_URL + '/app',
  failureRedirect: CLIENT_URL + '/error',
})

exports.validateAccount = passport.authenticate('local', {
  successRedirect: CLIENT_URL + '/app',
  failureRedirect: CLIENT_URL + '/error',
});

exports.isAuthenticated = (req, res) => {
  if(req.user) {
    res.status(200).json({
      user: req.user.name.givenName,
      mail: req.user.emails[0].value,
      message: 'successful'
    });
  }
  else {
    res.status(401).json({ message: 'failure' });
  }
}
