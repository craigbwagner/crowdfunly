const express = require("express");
const router = express.Router();
const contributionsController = require('../controllers/contributions')

router.get("/", contributionsController.index);

router.post("/:campaignId", contributionsController.createContribution);

module.exports = router;
