// models/Donates.js
const mongoose = require('mongoose');

const DonatesSchema = new mongoose.Schema({
  person_id: { type: String, required: true },
  bd_num: { type: String, required: true },
  med_history: { type: String, required: true },
  units: { type: Number, required: true },
});

module.exports = mongoose.model('Donates', DonatesSchema);
