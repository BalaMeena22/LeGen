const mongoose = require('mongoose'); // Add this at the top
const emailSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  pdfAttachment: String,
  pdfName: String,
  sentAt: { type: Date, default: Date.now },
  digitalSignature: String,
  publicKey: String
}, { 
  // Add createdAt and updatedAt timestamps
  timestamps: true 
});

// Add indexes for better performance
emailSchema.index({ userId: 1 });
emailSchema.index({ to: 1 });
emailSchema.index({ sentAt: -1 });

module.exports = mongoose.model('Email', emailSchema);