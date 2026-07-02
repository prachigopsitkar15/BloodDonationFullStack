// models/Receiver.js
const mongoose = require('mongoose');

const ReceiverSchema = new mongoose.Schema({
  bd_num: { type: String, required: true },
  receiver_aadhar: { type: String, required: true },
  req_num: { type: String, required: true },
});

module.exports = mongoose.model('Receiver', ReceiverSchema);
