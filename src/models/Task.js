const Sequelize = require("sequelize");
const sequelize = require("../db/connect");

const Task = sequelize.define("tasks", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  dueDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  completed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = Task;
