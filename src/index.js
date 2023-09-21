const sequelize = require("./db/connect");

const app = require("./app");

// Router
const taskRoute = require("./routes/taskApi");

const port = process.env.PORT || 7000;

app.use("/api/v1", taskRoute);

// app.get("/", (req, res) => {
//   res.render("home", {
//     title: "Search Hacker News",
//   });
// });

async function startDatabase() {
  try {
    await sequelize.sync();

    console.log("Connected to Database successfully!");
  } catch (error) {
    console.log(error);
  }
}

app.listen(port, async () => {
  startDatabase();
  console.log("Server is up on port " + port);
});
