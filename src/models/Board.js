const { Schema, model } = require("mongoose");

const boardSchema = new Schema({
  title: String,
});

module.exports = model("Board", boardSchema);
