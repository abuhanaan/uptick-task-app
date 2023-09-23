const yup = require("yup");

const taskCreationSchema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  dueDate: yup.date().required(),
});

module.exports = taskCreationSchema;
