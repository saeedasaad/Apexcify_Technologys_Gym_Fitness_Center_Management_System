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
.then(() => console.log(" MongoDB connected"))
.catch((err) => {
  console.error(" MongoDB connection error:", err);
  process.exit(1);
});

// Trainer data
const trainers = [
  {
    name: "David Martinez",
    email: "david.martinez@gmail.com",
    password: "password123",
    role: "trainer",
    profileImage: "/uploads/trainers/T_img-1.jpg",
    specialty: "HIIT & Boxing",
  },
  {
    name: "Marcus Johnson",
    email: "marcus.johnson2@gmail.com",
    password: "password123",
    role: "trainer",
    profileImage: "/uploads/trainers/T_img-2.jpg",
    specialty: "Strength & Conditioning",
  },
  {
    name: "Emily Roberts",
    email: "emily.roberts@gmail.com",
    password: "password123",
    role: "trainer",
    profileImage: "/uploads/trainers/T_img-3.jpg",
    specialty: "Yoga & Pilates",
  },
  {
    name: "Michael Lee",
    email: "michael.lee@gmail.com",
    password: "password123",
    role: "trainer",
    profileImage: "/uploads/trainers/T_img-4.jpg",
    specialty: "Cardio & Endurance",
  },
  {
    name: "Sophia Turner",
    email: "sophia.turner@gmail.com",
    password: "password123",
    role: "trainer",
    profileImage: "/uploads/trainers/T_img-5.jpg",
    specialty: "CrossFit & Functional Training",
  },
  {
    name: "James Anderson",
    email: "james.anderson@gmail.com",
    password: "password123",
    role: "trainer",
    profileImage: "/uploads/trainers/T_img-6.jpg",
    specialty: "Bodybuilding & Strength",
  },
  {
    name: "Olivia White",
    email: "olivia.white@gmail.com",
    password: "password123",
    role: "trainer",
    profileImage: "/uploads/trainers/T_img-7.jpg",
    specialty: "Dance & Zumba",
  },
];

const seedTrainers = async () => {
  try {
    for (const trainerData of trainers) {
      const existingTrainer = await User.findOne({ email: trainerData.email });

      if (existingTrainer) {
        console.log(` Trainer ${trainerData.email} exists, updating password...`);
        existingTrainer.password = await bcrypt.hash(trainerData.password, 10);
        await existingTrainer.save();
        console.log(` Trainer ${trainerData.email} updated successfully`);
        continue;
      }

      const trainer = new User({
        ...trainerData,
        password: await bcrypt.hash(trainerData.password, 10),
      });

      await trainer.save();
      console.log(` Trainer ${trainer.email} seeded successfully`);
    }

    process.exit();
  } catch (error) {
    console.error(" Error seeding trainers:", error);
    process.exit(1);
  }
};

seedTrainers();
