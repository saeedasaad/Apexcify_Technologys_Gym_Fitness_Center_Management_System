const User = require("../models/user");

// Get all trainers (admin)
exports.getAllTrainers = async (req, res) => {
  try {
    const trainers = await User.find({ role: "trainer" }).select("-password");
    res.json({ success: true, trainers });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch trainers" });
  }
};

// Get current trainer profile
exports.getMyTrainerProfile = async (req, res) => {
  try {
    const trainer = await User.findById(req.user.id).select("-password");
    if (!trainer || trainer.role !== "trainer") {
      return res.status(404).json({ message: "Trainer not found" });
    }
    res.json({ success: true, trainer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch trainer profile" });
  }
};

// Delete trainer (admin)
exports.deleteTrainer = async (req, res) => {
  try {
    const trainer = await User.findById(req.params.id);
    if (!trainer || trainer.role !== "trainer") {
      return res.status(404).json({ message: "Trainer not found" });
    }

    await trainer.remove();
    res.json({ success: true, message: "Trainer deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete trainer" });
  }
};
