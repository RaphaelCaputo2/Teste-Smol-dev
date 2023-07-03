const express = require('express');
const router = express.Router();
const passport = require('passport');

const RaffleController = require('../controllers/RaffleController');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });

// Raffle routes
router.post('/create', requireAuth, RaffleController.createRaffle);
router.get('/list', requireAuth, RaffleController.listRaffles);
router.get('/details/:id', requireAuth, RaffleController.raffleDetails);
router.put('/update/:id', requireAuth, RaffleController.updateRaffle);
router.delete('/delete/:id', requireAuth, RaffleController.deleteRaffle);

module.exports = router;