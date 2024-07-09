const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const SALT_LENGTH = 12;

async function signUp(req, res) {
  try {
    const userInDatabase = await User.findOne({ username: req.body.username });
    if (userInDatabase) {
      return res.status(400).json({ error: 'Username already taken.' });
    }
    const user = await User.create({
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, SALT_LENGTH)
    });
    const token = generateToken(user);
    res.status(201).json({ user, token })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
};

async function signIn(req, res) {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateToken(user);
      res.status(200).json({ token });
    } else {
      res.status(401).json({ error: 'Invalid username or password.' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

function generateToken(user) {
  const token = jwt.sign(
    { username: user.username, _id: user._id },
    process.env.JWT_SECRET
  );
  return token;
}

module.exports = {signUp, signIn};
