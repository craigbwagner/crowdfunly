const Campaign = require("../models/campaign");

const create = async (req, res) => {
  try {
    const createdCampaign = await Campaign.create(req.body);
    res.status(201).json(createdCampaign);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { create };
