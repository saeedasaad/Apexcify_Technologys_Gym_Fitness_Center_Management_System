const express = require("express");
const router = express.Router();

// Correct import
const { verifyToken, authorizeRoles } = require("../middleware/authMiddleware");
const { getAllTrainers, getMyTrainerProfile, deleteTrainer } = require("../controllers/trainerController");

// Routes
router.get("/", verifyToken, authorizeRoles("admin"), getAllTrainers);
router.get("/me", verifyToken, authorizeRoles("trainer"), getMyTrainerProfile);
router.delete("/:id", verifyToken, authorizeRoles("admin"), deleteTrainer);

module.exports = router;
