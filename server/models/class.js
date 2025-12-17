// Class.js (Mongoose schema)
const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  trainer: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainer', required: true },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  capacity: { type: Number, required: true },
  attendees: { type: [mongoose.Schema.Types.ObjectId], default: [] },
}, { timestamps: true });

module.exports = mongoose.model('Class', classSchema);
