// Use Environment Variables
require('dotenv').config();

// Import Required Modules
const passport = require('passport');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const session = require('express-session');

// use express instead body-parser
app.use(express.json({ extended: false }));
// Add public folder to be accessible
app.use(express.static('public'));
// Set Parameters for Express Session
const MongoStore = require('connect-mongo');
app.use(session({
  secret: process.env.SECRET,
  resave: true, proxy: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongoUrl: process.env.MONGO_URI,
    autoRemove: 'interval'
  }),
  cookie: {
    httpOnly: process.env.NODE_ENV === 'production' ? false : true,
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : true, // Set if using CORS
    domain: process.env.NODE_ENV === 'production' ? process.env.DOMAIN_URL : '',
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}));

// Passport Setup
app.use(passport.initialize());
app.use(passport.session());

// Setup CORS
app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: 'GET, POST, PUT, DELETE',
  credentials: true
}));

if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1);
}

// routes
const auth = require('./routes/auth');
const todo = require('./routes/todo');
const note = require('./routes/note');

// use Routes
app.use('/api/auth', auth);
app.use('/api/todo', todo);
app.use('/api/note', note);

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
    console.log('Started Notes Fly App in the port ' + process.env.PORT);
  });
});

app.get('/', (req, res) => {res.send('server is active')});
