const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    goalAmount: {
      type: Number,
      required: true,
    },
    amountRaised: {
      type: Number,
      default: 0,
    },
    contributions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Contribution",
      },
    ],
    endDate: {
      type: Date,
      required: true,
    },
    campaignType: {
      type: String,
      enum: ["Charity", "Education", "Creative", "Sports", "Entertainment", "Business", "Events", "Environment"],
      required: true,
    },
  },
  { timestamps: true }
);

const Campaign = mongoose.model("Campaign", campaignSchema);
module.exports = Campaign;
