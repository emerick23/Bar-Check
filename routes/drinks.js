var express = require('express');
var router = express.Router();
var drinksCtrl = require('../controllers/drinks');

router.get('/drinks/new', drinksCtrl.new);
router.post('/drinks', isLoggedIn, drinksCtrl.create);
router.post('/bars/:id/drinks', isLoggedIn, drinksCtrl.addToBar);
router.delete('/drinks/:id', drinksCtrl.delete);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;
