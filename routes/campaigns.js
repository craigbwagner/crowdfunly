const express = require('express');
const verifyToken = require("../middleware/verify-token.js");
const Campaign = require('../models/campaign');
const router = express.Router();

router.get ('/', async (req, res) => {
    try {
        const campaigns = await Campaign.find()
        .populate('createdBy', 'username')
        .populate('contributions');
        res.status(200).json(compaigns);
    } catch (error) {
       console.log(error);
       res.status(500).json(error);
 
    }

})

module.exports = router; 