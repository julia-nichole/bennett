const express = require('express');
const router = express.Router();
const teamsCtrl = require('../controllers/teams')

/* GET users listing. */
router.get('/', teamsCtrl.index);
router.get('/new', teamsCtrl.new);
router.get('/:id', teamsCtrl.show);
router.post('/', teamsCtrl.create);
router.put('/:id', teamsCtrl.update)
router.delete('/:id', teamsCtrl.delete);


module.exports = router;