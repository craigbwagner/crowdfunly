const express = require("express");
const verifyToken = require("../middleware/verify-token");
const router = express.Router();

const campaignsController = require("../controllers/campaigns");

// ========== Public Routes ===========

// ========= Protected Routes =========
router.use(verifyToken);

router.post("/", campaignsController.create);

// maybe move this route to public routes? so anyone can see the campaigns?
router.get("/", campaignsController.index);

// maybe move this route to public routes? so anyone can see the campaigns?
router.get("/:campaignId", campaignsController.show);

router.put("/:campaignId", campaignsController.update);

module.exports = router;
