const mongoose = require('mongoose'); // Add this at the top

const registerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  collegeMailId: { type: String, required: true, unique: true },
  professionRole: { type: [String], required: true },
  deptAndSection: String,
  department: String,
  isHosteller: String,
  hostelName: String,
  rollNumber: String
}, { timestamps: true });

registerSchema.index({ collegeMailId: 1 }, { unique: true });
registerSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model("Register", registerSchema);