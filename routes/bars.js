var express = require('express');
var router = express.Router();
var barsCtrl = require('../controllers/bars');

router.get('/bars', barsCtrl.index);

module.exports = router;
