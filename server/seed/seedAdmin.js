const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => {
  console.error(" MongoDB connection error:", err);
  process.exit(1);
});

// Admin data
const adminData = {
  name: "Super Admin",
  email: "admin@gym.com",
  password: "Admin@12345",
  role: "admin",
};

const seedAdmin = async () => {
  try {
    const existingAdmin = await User.findOne({ email: adminData.email });

    if (existingAdmin) {
      console.log(` Admin exists, updating password...`);
      existingAdmin.password = await bcrypt.hash(adminData.password, 10);
      await existingAdmin.save();
      console.log(` Admin updated successfully`);
    } else {
      const admin = new User({
        ...adminData,
        password: await bcrypt.hash(adminData.password, 10),
      });
      await admin.save();
      console.log(` Admin seeded successfully`);
    }

    process.exit();
  } catch (error) {
    console.error(" Error seeding admin:", error);
    process.exit(1);
  }
};

seedAdmin();
