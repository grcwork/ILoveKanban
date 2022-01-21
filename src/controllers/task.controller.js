const Task = require('../models/Task');

const taskCtrl = {};

taskCtrl.moveTask = async (req, res) => {
    const { taskId, newStatus } = req.body;
    const updatedTask = await Task.updateOne({ _id: taskId }, { status: newStatus });
    res.send(updatedTask);
};

taskCtrl.editTask = async (req, res) => {
    const { taskId, newDescription } = req.body;
    const updatedTask = await Task.updateOne({ _id: taskId }, { description: newDescription });
    res.send(updatedTask);
};

taskCtrl.addNewEmptyTask = async (req, res) => {
    const { idBoard, status } = req.body;
    const newTask = new Task({
        status: status,
        id_board: idBoard
    });
    const savedTask = await newTask.save();
    res.send(savedTask);
};

taskCtrl.deleteTask = async (req, res) => {
    const { idTask } = req.body;
    deletedTask = await Task.deleteOne({ _id: idTask });
    res.send(deletedTask);
};

module.exports = taskCtrl;