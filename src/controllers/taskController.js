const {
  createTask,
  getTask,
  getAllTasks,
  updateTask,
  deleteTask,
} = require("../services/TaskService");

const createTaskController = async (req, res) => {
  const response = await createTask(req, res);
  return response;
};

const getTaskController = async (req, res) => {
  const response = await getTask(req, res);
  return response;
};

const getAllTasksController = async (req, res) => {
  const response = await getAllTasks(req, res);
  return response;
};

const updateTaskController = async (req, res) => {
  const response = await updateTask(req, res);
  return response;
};

const deleteTaskController = async (req, res) => {
  const response = await deleteTask(req, res);
  return response;
};

const taskControllers = {
  createTaskController: createTaskController,
  getTaskController: getTaskController,
  getAllTasksController: getAllTasksController,
  updateTaskController: updateTaskController,
  deleteTaskController: deleteTaskController,
};

module.exports = taskControllers;
