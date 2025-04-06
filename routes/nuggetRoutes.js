const express = require('express');
const router = express.Router();
const {
  getAllNuggets,
  getRandomNugget,
  createNugget,
  deleteNugget
} = require('../controllers/nuggetController');

router.get('/', getAllNuggets);
router.get('/random', getRandomNugget);
router.post('/', createNugget);
router.delete('/:id', deleteNugget);

module.exports = router;
