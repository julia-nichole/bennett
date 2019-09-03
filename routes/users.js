
var express = require('express');
var router = express.Router();
var teamsCtrl = require('../controllers/teams');
/* GET users listing. */
router.get('/', teamsCtrl.index);
module.exports = router;
