const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  financeAdmin: {
    type: Boolean,
    required: true
  },
  salesAdmin: {
    type: Boolean,
    required: true
  },
  engineerAdmin: {
    type: Boolean,
    required: true
  },
  hrAdmin: {
    type: Boolean,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true
  }
});
module.exports = User = mongoose.model("users", UserSchema);
