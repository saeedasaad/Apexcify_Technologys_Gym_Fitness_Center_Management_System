const mongoose = require("mongoose");

const membershipSchema = new mongoose.Schema({
  plan: { type: String, enum: ["Basic", "Standard", "Premium"], default: "Basic" },
  status: { type: String, enum: ["Active", "Inactive"], default: "Inactive" },
  startDate: { type: Date },
  expiryDate: { type: Date },
  qrCode: { type: String },
});

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "trainer", "member"], default: "member" },
    membership: membershipSchema,
    paymentStatus: { type: String, enum: ["paid", "unpaid"], default: "unpaid" },
  },
  { timestamps: true }
);

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
