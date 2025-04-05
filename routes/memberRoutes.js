const express = require('express');
const router = express.Router();
const {
  getAllMembers,
  getRandomMember,
  createMember,
  deleteMember
} = require('../controllers/memberController');

// GET all members
router.get('/', getAllMembers);

// GET random member
router.get('/random', getRandomMember);

// POST create member
router.post('/', createMember);

// DELETE member by ID
router.delete('/:id', deleteMember);

module.exports = router;
