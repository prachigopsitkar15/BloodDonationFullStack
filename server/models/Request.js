// models/Request.js
const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  person_id: { type: String, required: true },
  hospital: { type: String, required: true },
  reason: { type: String, required: true },
  units: { type: Number, required: true },
  approval: { type: String, default: "Pending" },
});

module.exports = mongoose.model('Request', RequestSchema);
