const User = require('../models/user');

async function showProfile(req, res) {
  try {
    if (req.user._id !== req.params.userId) {
      return res.status(401).json({error: 'Unauthorized'});
    }
    const user = await User.findById(req.params.userId);
    if (!user) {
      res.status(404);
      throw new Error('Profile not found.');
    }
    res.json({ user });
  } catch (error) {
    if (res.statusCode === 404) {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

async function updateUser(req, res) {
  try {
    if (req.user._id !== req.params.userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    const updateUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    if (!updateUser) {
      res.status(404);
      throw new Error('Profile not found.');
    }
    res.json({ updateUser });
  } catch (error) {
    if (res.statusCode === 404) {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
}


module.exports = {showProfile, updateUser}
