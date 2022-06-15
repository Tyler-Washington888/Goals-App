const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalControllers");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getGoals, protect).post(setGoal, protect);
router.route("/:id").put(updateGoal, protect).delete(deleteGoal, protect);

module.exports = router;
