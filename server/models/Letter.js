const mongoose = require('mongoose'); // Add this at the top
const letterSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Register', 
    required: true 
  },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  formData: {
    recipientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Register' },
    letterType: { type: String, required: true },
    startDate: String,
    endDate: String,
    reason: String,
    companyName: String,
    companyLocation: String,
    collegeName: String,
    collegeLocation: String,
    date: String,
    numberOfStudents: String,
    location: String,
    editedContent: String,
  },
  signatureData: {
    image: String,
    signedBy: String,
    signedById: { type: mongoose.Schema.Types.ObjectId, ref: 'Register' },
    signedAt: Date,
  }
});

// Add indexes for faster queries
letterSchema.index({ userId: 1 });
letterSchema.index({ 'formData.recipientId': 1 });

const Letter = mongoose.model('Letter', letterSchema);