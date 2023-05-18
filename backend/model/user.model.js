const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phoneNumber: { type: Number },
  password: { type: String },
  services: [{}],
});
const User = mongoose.model("user", UserSchema);
module.exports = User;
