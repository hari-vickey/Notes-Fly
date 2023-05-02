// Express Router
const router = require('express').Router();

const {
  googleOAuth,
  googleCallback,
  createAccount,
  validateAccount,
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
 * @route POST api/auth/register
 * @description Create Local User Account
 * @access public
**/
router.post('/register', createAccount);

/**
 * @route POST api/auth/login
 * @description Passport User Account
 * @access public
**/
router.post('/login', validateAccount);

/**
 * @route POST api/auth/validate
 * @description Validate User Account
 * @access public
**/
router.get('/validate', isAuthenticated);

// router.get('/logout', logoutAccount);

module.exports = router;