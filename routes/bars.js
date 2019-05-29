var express = require('express');
var router = express.Router();
var barsCtrl = require('../controllers/bars');


router.get('/', barsCtrl.index);
router.get('/new', barsCtrl.new);
router.get('/:id', barsCtrl.show);
router.post('/', isLoggedIn, barsCtrl.create);
router.get('/:id/edit', barsCtrl.edit);
router.put('/:id', barsCtrl.updateBar);
router.delete('/:id', barsCtrl.delete);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}
module.exports = router;
