const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const nuggetSchema = new mongoose.Schema({
  nuggetId: { type: Number, unique: true },
  content: { type: String, required: true },
  author: { type: String, required: true }
});

// Auto-increment nuggetId
nuggetSchema.plugin(AutoIncrement, { inc_field: 'nuggetId' });

module.exports = mongoose.model('Nugget', nuggetSchema);
