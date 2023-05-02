const express = require("express");

const router = express.Router();

const {
  // getAllTodo,
  addTodoItem,
  // putUpdateTodo,
  // deleteTodo,
} = require('../controllers/todo');

/**
 * @route GET api/todo
 * @description get all todo items
 * @access public
**/

// router.get("/", getAllTodo);

/**
 * @route POST api/todo
 * @description Add a new TODO Item
 * @access public
**/

router.post("/", addTodoItem);

/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
**/
// router.put("/:id", putUpdateTodo);

/**
 * @route DELETE api/todo/:id
 * @description delete todo by id
 * @access public
**/

// router.delete("/:id", deleteTodo);

module.exports = router;
