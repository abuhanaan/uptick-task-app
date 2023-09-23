const express = require("express");

const {
  createTaskController,
  getTaskController,
  getAllTasksController,
  updateTaskController,
  deleteTaskController,
} = require("../controllers/taskController");

const validateFields = require("../middleware/fieldValidation");
const taskCreationSchema = require("../utils/validations/validateTaskCreationRequest");
const taskUpdationSchema = require("../utils/validations/validateTaskUpdateRequest");

const router = new express.Router();

router.post("/tasks", validateFields(taskCreationSchema), createTaskController);
router.get("/tasks", getAllTasksController);
router.get("/tasks/:id", getTaskController);

router.put(
  "/tasks/:id",
  validateFields(taskUpdationSchema),
  updateTaskController
);
router.delete("/tasks/:id", deleteTaskController);

module.exports = router;
