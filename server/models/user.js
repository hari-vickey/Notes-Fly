const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fName: String, lName: String, password: String, googleId: String,
  mail: {type: String, required: true},
  items: [{item: String}],
  notes: [{title: String, content: String}]
});

const User = mongoose.model("user", UserSchema);

module.exports = User;