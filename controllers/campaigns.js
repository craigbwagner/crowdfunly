const Campaign = require("../models/campaign");

const create = async (req, res) => {
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

module.exports = { create };
