const express = require('express');
const User = require('../controllers/user')
const router = express.Router();
const Rental = require('../models/rental');

router.post('/login', User.auth)
router.post('/register', User.register)

module.exports = router;