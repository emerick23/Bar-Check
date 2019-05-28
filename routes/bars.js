var express = require('express');
var router = express.Router();
var barsCtrl = require('../controllers/bars');


router.get('/', barsCtrl.index);
router.get('/new', barsCtrl.new);
router.get('/:id', barsCtrl.show);
router.post('/', barsCtrl.create);

module.exports = router;
