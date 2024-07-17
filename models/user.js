const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
  },
  campaigns: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Campaign",
    },
  ],
  contributions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Contribution",
    },
  ],
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject.password;
  },
});

module.exports = mongoose.model("User", userSchema);
