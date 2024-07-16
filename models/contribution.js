const mongoose = require("mongoose");

const contributionSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    contributedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    campaignId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Campaign",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contribution", contributionSchema);
