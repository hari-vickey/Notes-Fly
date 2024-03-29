const User = require('../models/user');

exports.addItem = (req, res) => {
  User.findOneAndUpdate(req.body.mail)
  .then((foundUser) => {
    if(foundUser) {
      foundUser.items.push(req.body.item);
      foundUser.save();
    }
  }).then(() => res.send('added item'));;
};

exports.getItems = (req, res) => {
  User.findOne({mail: req.body.mail}).then((foundUser) => {
    if(foundUser) res.send(foundUser.items);
  })
}

exports.deleteItem = (req, res) => {
  User.findOneAndUpdate(req.body.mail)
  .then((foundUser) => {
    if(foundUser) {
      foundUser.items.pull({_id: req.body.item});
      foundUser.save();
    }
  }).then(() => res.send('deleted item'));
}