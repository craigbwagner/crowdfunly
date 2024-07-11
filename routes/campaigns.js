const express = require("express");
const verifyToken = require("../middleware/verify-token");
const router = express.Router();

const campaignsController = require("../controllers/campaigns");

// ========== Public Routes ===========

// ========= Protected Routes =========
router.use(verifyToken);

router.post("/", campaignsController.create);

module.exports = router;
