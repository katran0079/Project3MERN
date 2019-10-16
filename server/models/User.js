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
  tags: {
    type: Object
  },
  dateJoined: {
    type: Date,
    default: Date.now
  },
  registered: {
    type: Boolean,
    default: false
  },
  status: {
    type: Object,
    default: {
      body: "I have joined Congoers!",
      date: Date.now,
      replies: {}
    }
  },
  //may not need but whatever
  profile: {
    type: Object,
    default: {
      body: "Let the world know about you!",
      socialMediaLinks: {},
      interests: "What do you like?"
    }
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
