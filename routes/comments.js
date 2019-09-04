var express = require('express');
var router =express.Router();
var commentsCtrl = require('../controllers/comments');

router.post('/teams/:id/comments', commentsCtrl.create);
router.delete('/teams/:id/comments', commentsCtrl.delete);
module.exports = router;