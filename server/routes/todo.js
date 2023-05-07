// Setup Router
const express = require('express');
const router = express.Router();

const {
  getItems,
  addItem,
  deleteItem,
} = require('../controllers/todo');

/**
 * @route POST api/todo/allItems
 * @description get all items
 * @access public
**/

router.post('/allItems', getItems);

/**
 * @route POST api/todo/addItem
 * @description Add an Item
 * @access public
**/

router.post('/addItem', addItem);

/**
 * @route POST api/todo/deleteItem
 * @description delete an Item
 * @access public
**/
router.post('/deleteItem', deleteItem);

module.exports = router;
