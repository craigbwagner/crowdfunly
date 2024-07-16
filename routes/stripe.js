const express = require("express");
const router = express.Router();
const stripeController = require("../controllers/stripe");

router.post("/create-payment-intent", stripeController.makePayment);

module.exports = router;
