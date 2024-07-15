const express = require("express");
const Contribution = require("../models/contribution");
const router = express.Router();
const mongoose = require('mongoose');
const Campaign = require("../models/campaign");

router.post("/:campaignId", async (req, res) => {
  const { amount, contributedBy } = req.body;
  const { campaignId } = req.params;
  
  try {
    const createdContribution = await Contribution.create(req.body);
    createdContribution._doc.contributedBy = req.user;
    res.status(201).json(createdContribution);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
