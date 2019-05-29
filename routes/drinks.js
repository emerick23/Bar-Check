var express = require('express');
var router = express.Router();
var drinksCtrl = require('../controllers/drinks');

router.get('/drinks/new', drinksCtrl.new);
router.post('/drinks', drinksCtrl.create);
router.post('/bars/:id/drinks', drinksCtrl.addToBar);
module.exports = router;