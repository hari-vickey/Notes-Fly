const mongoose = require('mongoose');
// const todoSchema = new mongoose.Schema({item: String});
// const noteSchema = new mongoose.Schema({
//   title: String, content: String
// });
const UserSchema = new mongoose.Schema({
  fName: String, lName: String, password: String, googleId: String,
  mail: {type: String, required: true},
  todoItems: [{item: String}],
  notes: [{title: String, content: String}]
  // todoItems: [todoSchema], notes: [noteSchema]
});

const User = mongoose.model("user", UserSchema);

module.exports = User;