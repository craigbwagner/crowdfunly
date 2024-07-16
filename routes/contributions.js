const express = require("express");
const mongoose = require("mongoose");
const Contribution = require("../models/contribution");
const Campaign = require("../models/campaign");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const contributions = await Contribution.find({})
      .populate("contributedBy")
      .populate("campaignId")
      .sort({ createdAt: "desc" });
    res.status(200).json(contributions);
  } catch (error) {
    res.status(500).json(error);
  }
})

router.post("/:campaignId", async (req, res) => {
  const { amount, contributedBy } = req.body;
  const { campaignId } = req.params;

  try {
    if (!amount || !contributedBy) {
      return res.status(400).json({ message: "Amount and Contributor ID are required" });
    }

    const newContribution = new Contribution({
      amount,
      contributedBy: new mongoose.Types.ObjectId(contributedBy),
      campaignId: new mongoose.Types.ObjectId(campaignId),
    });

    await newContribution.save();

    const updatedCampaign = await Campaign.findByIdAndUpdate(
      new mongoose.Types.ObjectId(campaignId),
      { $inc: { amountRaised: amount } },
      { new: true }
    );

    if (!updatedCampaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }

    res.status(201).json(newContribution);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
