const express = require('express');
const Campaign = ('../models/campaign');
const router = express.Router();

router.get ('/', async (req, res) => {
    try {
        const campaigns = await Campaign.find()
    } catch (error) {
        
    }


})
