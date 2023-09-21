const express = require("express");
require("dotenv").config();

const app = express();
const { engine } = require("express-handlebars");

const path = require("path");

app.use(express.json());

app.engine(
  "hbs",
  engine({
    extname: "hbs",
    defaultLayout: "planB",
    allowedProtoMethods: {
      trim: true,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", "./src/views");

// app.use(express.static(__dirname + "/src/public"));

// app.use(express.static("src/public"));

// app.set("views", path.resolve("./src/views"));

module.exports = app;
