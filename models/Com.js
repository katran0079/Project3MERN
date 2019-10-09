const mongoose = require("mongoose");

const ComSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  fullDesc: {
    type: String,
    require: true
  },
  entryDate: {
    type: Date,
    default: Date.now
  },
  sellableDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("com", ComSchema);
