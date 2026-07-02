// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  user_name: { type: String, required: true },
  user_email: { type: String, required: true, unique: true },
  user_password: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);
