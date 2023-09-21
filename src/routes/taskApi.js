const express = require("express");
// const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

const {
  createTaskController,
  getTaskController,
  getAllTasksController,
  updateTaskController,
  deleteTaskController,
} = require("../controllers/taskController");
const bootstrap = require("../bootstrap");

// const validateFields = require("../middleware/FieldValidation");
// const personCreationSchema = require("../utils/validations/ValidatePersonCreationRequest");

const router = new express.Router();

// router.post(
//   "/api",
//   validateFields(personCreationSchema),
//   createPersonController
// );

// bootstrap(app, router);

router.post("/tasks", createTaskController);
router.get("/tasks", getAllTasksController);
router.get("/tasks/:id", getTaskController);

router.put("/tasks/:id", updateTaskController);
router.delete("/tasks/:id", deleteTaskController);
// router.get("/", (req, res) => {
//   res.render("home", {
//     title: "Search Hacker News",
//   });
// });

fakeApi = () => {
  return [
    {
      name: "Katarina",
      lane: "midlaner",
    },
    {
      name: "Jayce",
      lane: "toplaner",
    },
    {
      name: "Heimerdinger",
      lane: "toplaner",
    },
    {
      name: "Zed",
      lane: "midlaner",
    },
    {
      name: "Azir",
      lane: "midlaner",
    },
  ];
};

router.get("/", (req, res) => {
  console.log(fakeApi());
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  res.render("main", {
    layout: "index",
    suggestedChamps: fakeApi(),
    listExists: true,
  });
});
module.exports = router;
