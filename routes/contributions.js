const express = require("express");
const Contribution = require("../models/contribution");
const router = express.Router();

router.post("/:campaignId", async (req, res) => {
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
