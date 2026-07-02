// models/Blood.js
const mongoose = require('mongoose');

const BloodSchema = new mongoose.Schema({
  bd_num: { type: String, required: true, unique: true },
  bd_grp: { type: String, required: true },
  bd_status: { type: String, default: "No" },
});

module.exports = mongoose.model('Blood', BloodSchema);
