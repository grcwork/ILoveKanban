const Task = require('../models/Task');
const Board = require('../models/Board');

const taskCtrl = {};

taskCtrl.moveTask = async (req, res ) => {

    console.log(req.body)
    const {taskId, newStatus} = req.body

    console.log(taskId, newStatus);
    await Task.updateOne({_id: taskId}, {status: newStatus});

    const boards = await Board.find({});
    const tasks = await Task.find({id_board: taskId});

    res.render('index', {boards: boards , tasks: tasks });
};

module.exports = taskCtrl;