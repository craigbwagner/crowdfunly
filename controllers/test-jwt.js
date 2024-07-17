const jwt = require("jsonwebtoken");

async function verifyToken(req, res) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ decoded });
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}

async function signToken(req, res) {
  const user = {
    _id: 1,
    username: "Jeff",
    password: "test",
  };
  const token = jwt.sign({ user }, process.env.JWT_SECRET);
  res.json({ token });
}

module.exports = { verifyToken, signToken };
