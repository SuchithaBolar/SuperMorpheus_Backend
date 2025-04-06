const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  joiningDate: { type: Date, required: true },
  interests: { type: [String], required: true }
});

module.exports = mongoose.model('Member', memberSchema);
