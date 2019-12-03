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
    type: String,
    required: true
  },
  salesAdmin: {
    type: String,
    required: true
  },
  engineerAdmin: {
    type: String,
    required: true
  },
  hrAdmin: {
    type: String,
    required: true
  },
  isAdmin: {
    type: String,
    required: true
  }
});
module.exports = User = mongoose.model("users", UserSchema);
