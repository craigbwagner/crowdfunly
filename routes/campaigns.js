const express = require('express');
const verifyToken = require("../middleware/verify-token.js");
const Campaign = ('../models/campaign');
const router = express.Router();

router.get ('/', async (req, res) => {
    try {
        const campaigns = await Campaign.find()
        .populate('createdBy', 'username');
        populate('contributions');
        res.status(201).json(compaigns);
    } catch (error) {
       
        
    }


})
