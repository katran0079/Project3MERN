const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  userID: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  dateJoined: {
    type: Date,
    default: Date.now
  },
  registered: {
    type: Boolean,
    default: false
  },
  profile: {
    type: Object
  },
  ///ref/link to a user saved car inventory
  savedEvents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Con"
    }
  ]
});

module.exports = mongoose.model("user", UserSchema);
