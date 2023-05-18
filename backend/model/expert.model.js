const mongoose = require("mongoose");
const ExpertSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  detail: { type: String },
  phoneNumber: { type: Number },
  password: { type: String },
});
const Expert = mongoose.model("expert", ExpertSchema);
module.exports = Expert;
