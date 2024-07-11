const express = require("express");
const verifyToken = require("../middleware/verify-token");
const router = express.Router();

const campaignsController = require("../controllers/campaigns");

router.use(verifyToken);

router.post("/", campaignsController.create);

// maybe move these routes to public routes? so anyone can see the campaigns?
router.get("/", campaignsController.index);

router.get("/:campaignId", campaignsController.show);

module.exports = router;
