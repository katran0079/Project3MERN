const mongoose = require("mongoose");

const ComSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  eventID: {
    type: String,
    require: true
  },
  venueInfo: {
    type: Object
  },
  start: {
    type: Date,
    default: Date.now
  },
  end: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("com", ComSchema);
