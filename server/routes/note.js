// Setup Router
const express = require('express');
const router = express.Router();

const {
  getNotes,
  addNote,
  deleteNote,
} = require('../controllers/note');

/**
 * @route POST api/note/allNotes
 * @description get all notes
 * @access public
**/

router.post('/allNotes', getNotes);

/**
 * @route POST api/note/addNote
 * @description Add note
 * @access public
**/

router.post('/addNote', addNote);

/**
 * @route POST api/note/deleteNote
 * @description delete note
 * @access public
**/
router.post('/deleteNote', deleteNote);

module.exports = router;
