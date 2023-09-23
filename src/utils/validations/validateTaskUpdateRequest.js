const yup = require("yup");

const taskCreationSchema = yup.object({
  title: yup.string(),
  description: yup.string(),
  dueDate: yup.date(),
  completed: yup.boolean(),
});

module.exports = taskCreationSchema;
