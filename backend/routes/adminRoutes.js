const express = require('express');
const passport = require('passport');
const adminController = require('../controllers/adminController');

const router = express.Router();

// Admin registration route
router.post('/register', adminController.registerAdmin);

// Admin login route
router.post('/login', passport.authenticate('admin-local', { session: false }), adminController.loginAdmin);

// Admin dashboard route
router.get('/dashboard', passport.authenticate('jwt', { session: false }), adminController.getAdminDashboard);

module.exports = router;