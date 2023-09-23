const express = require("express");

const {
  createTaskController,
  getTaskController,
  getAllTasksController,
  updateTaskController,
  deleteTaskController,
} = require("../controllers/taskController");

// const validateFields = require("../middleware/FieldValidation");
// const personCreationSchema = require("../utils/validations/ValidatePersonCreationRequest");

const router = new express.Router();

router.post("/tasks", createTaskController);
router.get("/tasks", getAllTasksController);
router.get("/tasks/:id", getTaskController);

router.put("/tasks/:id", updateTaskController);
router.delete("/tasks/:id", deleteTaskController);

module.exports = router;
