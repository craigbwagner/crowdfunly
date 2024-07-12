const Campaign = require("../models/campaign");

async function create(req, res) {
  try {
    req.body.createdBy = req.user._id;
    const createdCampaign = await Campaign.create(req.body);
    createdCampaign._doc.createdBy = req.user;
    res.status(201).json(createdCampaign);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

async function index(req, res) {
  try {
    const campaigns = await Campaign.find({})
      .populate("createdBy")
      .sort({ createdAt: "desc" });
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json(error);
  }
};

async function show(req, res) {
  try {
    const campaign = await Campaign.findById(req.params.campaignId).populate(
      "createdBy"
    );
    res.status(200).json(campaign);
  } catch (error) {
    res.status(500).json(error);
  }
};

async function update(req, res) {
  try {
    const campaign = await Campaign.findById(req.params.campaignId);

    if (!campaign.createdBy.equals(req.user._id)) {
      return res.status(403).send({ error: "Unauthorized" });
    }

    const updatedCampaign = await Campaign.findByIdAndUpdate(
      req.params.campaignId,
      req.body,
      { new: true }
    );

    updatedCampaign._doc.createdBy = req.user;

    res.status(200).json(updatedCampaign);
  } catch (error) {
    res.status(500).json(error);
  }
};

async function deleteCampaign(req, res) {
  try {
    const campaign = await Campaign.findById(req.params.campaignId);

    if (!campaign.createdBy._id.equals(req.user._id)) {
      return res.status(403).send({ error: "Unauthorized" });
    }

    const deletedCampaign = await Campaign.findByIdAndDelete(
      req.params.campaignId
    );
    res.status(200).json(deletedCampaign);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { create, index, show, update, deleteCampaign };
