const { Schema, model, Types } = require('mongoose');

const taskSchema = new Schema({
    description: String,
    status: String,
    id_board: Types.ObjectId
});

module.exports = model("Task", taskSchema);