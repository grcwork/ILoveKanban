const express = require("express");
const path = require("path");
const hbs = require("hbs");
const morgan = require("morgan");

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Register handlebars partials
hbs.registerPartials(path.join(__dirname, "views/partials"));

// Register handlebars helpers
hbs.registerHelper("ifeq", function (value1, value2, options) {
  return value1 == value2 ? options.fn(this) : options.inverse(this);
});

hbs.registerHelper("getFirstCharOfString", function (string) {
  return string[0];
});

// Set views directory and view engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static files
app.use("/static", express.static(path.join(__dirname, "..", "public")));

// Board routes
app.use("/board", require("./routes/board.routes"));
app.use("/task", require("./routes/task.routes"));

module.exports = app;
