const User = require('../models/user');

exports.addNote = (req, res) => {
  User.findOneAndUpdate(req.body.mail)
  .then((foundUser) => {
    if(foundUser) {
      foundUser.notes.push(req.body.note);
      foundUser.save();
    }
  }).then(() => res.send('added note'));;
};

exports.getNotes = (req, res) => {
  User.findOne({mail: req.body.mail}).then((foundUser) => {
    if(foundUser) res.send(foundUser.notes);
  })
}

exports.deleteNote = (req, res) => {
  User.findOneAndUpdate(req.body.mail)
  .then((foundUser) => {
    if(foundUser) {
      foundUser.notes.pull({_id: req.body.note});
      foundUser.save();
    }
  }).then(() => res.send('deleted note'));
}