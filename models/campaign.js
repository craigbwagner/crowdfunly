const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    goalAmount: {
        type: Number,
        required: true
    },
    amountRaised: {
        type: Number,
        default: 0
    },
    contributions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contribution'
    }],
    endDate: {
        type: Date,
        required: true
    },
    campaignType: {
        type: String,
        enum: ['type1', 'type2', 'type3','type4'] //create and replace with actual campaign types!
    }
}, {timestamps: true});

module.exports = mongoose.model('Campaign', campaignSchema);