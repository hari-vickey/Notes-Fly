const User = require('../models/user');
// Passport for Authentication
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
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
        User.create(user).catch((err) => console.log(err));
      }
    });
    done(null, profile);
  }
));

passport.serializeUser((user,done)=>{
  done(null,user);
});

passport.deserializeUser((user,done)=>{
  done(null,user);
});

exports.googleOAuth = passport.authenticate('google', {
  scope: ['profile', 'email']
});

exports.googleCallback = passport.authenticate('google', {
  successRedirect: process.env.CLIENT_URL + '/app',
  failureRedirect: process.env.CLIENT_URL + '/error',
})

exports.isAuthenticated = (req, res) => {
  if(req.user) {
    res.send({
      user: req.user.name.givenName,
      mail: req.user.emails[0].value,
      message: 'success'
    });
  }
  else {
    res.send({ message: 'failure' });
  }
}

exports.logoutAccount = (req, res) => {
  req.logout((err) => {
    if (err) { console.log(err); }
    res.redirect(process.env.CLIENT_URL);
  });
}
