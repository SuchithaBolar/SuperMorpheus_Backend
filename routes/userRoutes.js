const express = require('express');
const { getUsers } = require('../controllers/userController');
const router = express.Router();

// Define route for getting all users
router.get('/', getUsers);

module.exports = router;
