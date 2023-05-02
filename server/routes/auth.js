// Express Router
const router = require('express').Router();

const {
  googleOAuth,
  googleCallback,
  isAuthenticated,
  logoutAccount
} = require('../controllers/auth');

/**
 * @route GET api/auth/google
 * @description Google account Handle
 * @access public
**/
router.get('/google', googleOAuth);

/**
 * @route GET api/auth/google/notesfly
 * @description google callback
 * @access public
**/
router.get('/google/notesfly', googleCallback);

/**
 * @route POST api/auth/validate
 * @description Validate User Account
 * @access public
**/
router.get('/validate', isAuthenticated);

/**
 * @route POST api/auth/logout
 * @description Logout User Account
 * @access public
**/
router.get('/logout', logoutAccount);

module.exports = router;