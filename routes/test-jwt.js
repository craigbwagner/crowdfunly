const express = require("express");
const router = express.Router();
const testJWT = require("../controllers/test-jwt");

router.get("/sign-token", testJWT.signToken);

router.post("/verify-token", testJWT.verifyToken);

module.exports = router;
