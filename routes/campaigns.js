const express = require("express");
const verifyToken = require("../middleware/verify-token");
const router = express.Router();

const campaignsController = require("../controllers/campaigns");

router.get("/", campaignsController.index);
router.get("/:campaignId", campaignsController.show);

router.use(verifyToken);

router.post("/", campaignsController.create);
router.put("/:campaignId", campaignsController.update);
router.delete("/:campaignId", campaignsController.deleteCampaign);

module.exports = router;
