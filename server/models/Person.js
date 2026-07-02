// models/Person.js
const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
  aadhar: { type: String, required: true, unique: true },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  age: { type: Number, required: true },
  ph_no: { type: String, required: true },
  sex: { type: String, required: true },
  bd_grp: { type: String, required: true },
});

module.exports = mongoose.model('Person', PersonSchema);
