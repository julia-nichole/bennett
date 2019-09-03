var express = require('express');
var router =express.Router();
var commentsCtrl = require('../controllers/comments');

router.post('/teams/:id/comments', commentsCtrl.create);
router.delete('/:id', commentsCtrl.delete);
module.exports = router;