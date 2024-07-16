const express = require("express");
const router = express.Router();
const contributionsController = require('../controllers/contributions');
const verifyToken = require("../middleware/verify-token");

router.use(verifyToken);

router.get("/", contributionsController.index);
router.post("/:campaignId", contributionsController.createContribution);

module.exports = router;
