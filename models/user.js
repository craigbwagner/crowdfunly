const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.password;
  }
});

module.exports = mongoose.model('User', userSchema);