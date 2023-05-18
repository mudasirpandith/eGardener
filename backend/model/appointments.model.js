const mongoose = require("mongoose");
const AppSchema = new mongoose.Schema({
  expertId: [{ type: mongoose.Schema.Types.ObjectId, ref: "expert" }],
  clientId: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  date: { type: String },
  slot: { type: String },
  service: { type: String },
  message: { type: String },
  status: { type: String, default: "pending" },
  meetingUrl: { type: String },
});
const Appointment = mongoose.model("appointment", AppSchema);
module.exports = Appointment;
