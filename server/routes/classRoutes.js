const express = require("express");
const router = express.Router();
const {
  fetchClasses,
  fetchMyTrainerClasses,
  createClass,
  updateClass,
  deleteClass,
  bookClass,
  cancelClass,
} = require("../controllers/classController");

const { verifyToken, authorizeRoles } = require("../middleware/authMiddleware");

router.get("/", verifyToken, fetchClasses);
router.get("/trainer/me", verifyToken, authorizeRoles("trainer"), fetchMyTrainerClasses);
router.post("/", verifyToken, authorizeRoles("admin"), createClass);
router.put("/:id", verifyToken, authorizeRoles("admin"), updateClass);
router.delete("/:id", verifyToken, authorizeRoles("admin"), deleteClass);
router.post("/:id/book", verifyToken, authorizeRoles("member"), bookClass);
router.post("/:id/cancel", verifyToken, authorizeRoles("member"), cancelClass);

module.exports = router;

