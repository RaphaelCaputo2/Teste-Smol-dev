const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/userController');

// User registration route
router.post('/register', userController.register);

// User login route
router.post('/login', passport.authenticate('local'), userController.login);

// User profile route
router.get('/profile', passport.authenticate('jwt', { session: false }), userController.profile);

// User logout route
router.get('/logout', userController.logout);

module.exports = router;