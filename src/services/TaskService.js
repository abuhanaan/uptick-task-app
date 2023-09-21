const { response, get } = require("../app");
const Task = require("../models/Task");

const createTask = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;
    const existingTask = await Task.findOne({ where: { title: title } });
    if (existingTask) {
      const response = {
        success: false,
        error: "CONFLICT_OPERATION",
        message: `Task with title ${title} already exist`,
      };

      return res.status(409).send(response);
    }

    const newTask = await Task.create({
      title: title,
      description: description,
      dueDate: dueDate,
    });
    const response = {
      success: true,
      message: "Task created successfully",
      data: {
        taskId: newTask.id,
        title: newTask.title,
        description: newTask.description,
        dueDate: newTask.dueDate.toISOString().split("T")[0],
        status: newTask.completed ? "Completed" : "Pending",
      },
    };
    return res.status(201).send(response);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    const mappedTasks = tasks.map((task) => {
      return {
        taskId: task.id,
        title: task.title,
        description: task.description,
        dueDate: task.dueDate.toISOString().split("T")[0],
        status: task.completed ? "Completed" : "Pending",
        url: `/api/v1/tasks/${task.id}`,
      };
    });

    const response = {
      success: true,
      data: mappedTasks,
    };
    // return res.status(200).send(response);
    return res.status(200).render("allTasks", {
      layout: "index",
      tasks: response.data,
      success: response.success,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const getTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findOne({ where: { id: id } });
    if (!task) {
      const response = {
        success: false,
        error: "NOT_FOUND",
        message: "Task does not exist",
      };
      return res.status(404).send(response);
    }
    // const dueDate = task.dueDate;
    // const resDueDate = dueDate.split("T")[0];
    const response = {
      success: true,
      message: "Task fetched successfully",
      data: {
        taskId: task.id,
        title: task.title,
        description: task.description,
        dueDate: task.dueDate.toISOString().split("T")[0],
        status: task.completed ? "Completed" : "Pending",
      },
    };

    // return res.status(200).send(response);
    return res.status(200).render("taskDetails", {
      layout: "index",
      task: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({ where: { id: id } });
    if (!task) {
      const response = {
        success: false,
        error: "NOT_FOUND",
        message: "Task does not exist",
      };
      return res.status(404).send(response);
    }

    await task.update(req.body);
    const response = {
      success: true,
      message: "Task Updated successfully",
      data: {
        taskId: task.id,
        title: task.title,
        description: task.description,
        dueDate: task.dueDate.toISOString().split("T")[0],
        status: task.completed ? "Completed" : "Pending",
      },
    };

    return res.status(201).send(response);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({ where: { id: id } });
    if (!task) {
      const response = {
        success: false,
        error: "NOT_FOUND",
        message: "Task does not exist",
      };
      return res.status(404).send(response);
    }

    await task.destroy();

    const response = {
      success: true,
      message: "Task Deleted Successfully!",
    };

    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error!");
  }
};

const taskServices = {
  createTask: createTask,
  getAllTasks: getAllTasks,
  getTask: getTask,
  updateTask: updateTask,
  deleteTask: deleteTask,
};

module.exports = taskServices;
