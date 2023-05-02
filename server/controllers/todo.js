const User = require('../models/user');

exports.addTodoItem = (req, res) => {
  User.create(req.body).then((data) => {
    console.log(data);
    res.json({
      message: 'todo item added successfully', data
    });
  }).catch((err) => {
    res.status(400).json({
      message: 'unable to add todo item',
      error: err.message
    })
  });
};
