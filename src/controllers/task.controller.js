const Task = require('../models/Task');

const taskCtrl = {};

taskCtrl.moveTask = async (req, res ) => {
    const {taskId, newStatus} = req.body;
    const updatedTask = await Task.updateOne({_id: taskId}, {status: newStatus});
    res.send(updatedTask);
};

taskCtrl.editTask = async(req, res) => {
    const {taskId, newDescription} = req.body;
    const updatedTask = await Task.updateOne({_id: taskId}, {description: newDescription});
    res.send(updatedTask);
};

module.exports = taskCtrl;