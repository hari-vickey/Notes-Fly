// use environment variables
require('dotenv').config();
// Imports
const bodyParser = require('body-parser');
// Mongoose to handle mongodb
const mongoose = require('mongoose');
// Express
const session = require('express-session');
const express = require('express');
const app = express();
// Passport for Authentication
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Use Body Parser
app.use(bodyParser.urlencoded({extended: true}));
// Add public folder to be accessible
// app.use(express.static('public'));
// Set Parameters for Express session
app.use(session({ // creates cookie
  secret: process.env.SECRET,
  resave: false, saveUninitialized: false
}));

// Passport Setup
app.use(passport.initialize());
app.use(passport.session());

// Create Schema for users
const userSchema = new mongoose.Schema({
  username: String, googleId: String
});
const User = new mongoose.model('User', userSchema);

// serialize user
passport.serializeUser(function(user, done) { done(null, user.id); });
// deserialize user
passport.deserializeUser(function(id, done) {
  User.findById(id).then(user => {
    done(null, user);
  }).catch((err) => { return done(err) });
});

// Create a Google Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/google/notesfly'
}, async function (accessToken, refreshToken, profile, done) {
  try {
    // console.log(profile); // Find or create user in your database
    let user = await User.findOne({ googleId: profile.id });
    if (!user) { // Create new user in database
      const newUser = new User({
        username: profile.displayName, googleId: profile.id });
      user = await newUser.save();
    }
    return done(null, user);
  } catch (err) { return done(err); }
}));

// connect to mongoDB server
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected on Port ' + conn.connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

// Start Listening on the mentioned port
connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log('Started AuthDemo App in the port ' + process.env.PORT);
  });
});

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile']
}));

app.get('/auth/google/todo',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
});