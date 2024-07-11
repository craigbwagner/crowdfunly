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
    res.staus(200).json(campaigns);
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

module.exports = { create, index, show };
