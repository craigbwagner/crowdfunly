const express = require('express');
const mongoose = require('mongoose');
const verifyToken = require("../middleware/verify-token.js");
const Contribution = require('../models/contribution');
const Campaign = require('../models/campaign');
const router = express.Router();

router.post('/', async (req, res) => {
    const { amount, contributedBy, campaignId } = req.body;

    try {
        const newContribution = new Contribution({
            amount,
            contributedBy: mongoose.Types.ObjectId(contributedBy),
            campaignId: mongoose.Types.ObjectId(campaignId),
        });

        await newContribution.save();


        await Campaign.findByIdAndUpdate(campaignId, {
            $inc: { amountRaised: amount }
        });

        res.status(201).send(newContribution);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;