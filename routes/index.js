var express = require('express');
var router = express.Router();
var passport = require('passport');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Premier league',
    user: req.user,
    name:req.query.name
  });
}); 


router.get('/auth/google',passport.authenticate(
  'google',
  { scope: ['profile','email'] }
));
router.get('/oauth2callback',passport.authenticate(
  'google',
  { 
    successRedirect : '/users',
    failureRedirect:'/'
  }
));
 router.get('/logout',function(req,res){
  req.logout();
  res.redirect('/')
 });
module.exports = router;
