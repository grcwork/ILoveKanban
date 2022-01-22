const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/i-love-kanban")
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log(err));
