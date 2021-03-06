var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/bars');
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  {scope: ['profile', 'email']}
));

// Google OAuth login route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/bars',
    failureRedirect : '/bars'
  }
));

// OAuth logout route
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/bars');
});

module.exports = router;
