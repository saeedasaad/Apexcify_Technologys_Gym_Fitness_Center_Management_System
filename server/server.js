// Load environment variables first
require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

// Initialize Express
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); 
app.use(express.json()); 
app.use("/uploads", express.static("uploads")); 

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/classes", require("./routes/classRoutes"));
app.use("/api/trainers", require("./routes/trainerRoutes"));
app.use("/api/payments", require("./routes/paymentRoutes"));

// Health check route (optional)
app.get("/", (req, res) => res.send("Gym Fitness Management API is running"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

