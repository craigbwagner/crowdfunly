const express = require("express");
const Contribution = require("../models/contribution");
const router = express.Router();
const mongoose = require('mongoose');
const Campaign = require("../models/campaign");

router.post("/:campaignId", async (req, res) => {
  const { amount, contributedBy } = req.body;
  const { campaignId } = req.params;

  try {
     if (!amount || !contributedBy) {
      return res.status(400).json({ message: 'Amount and Contributor ID are required' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
