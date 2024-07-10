const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verify-token');
const profiles = require('../controllers/profiles');

router.get('/:userId', verifyToken, profiles.showProfile);

module.exports = router;
