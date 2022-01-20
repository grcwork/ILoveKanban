const Task = require('../models/Task');
const Board = require('../models/Board');

const boardCtrl = {};

boardCtrl.getBoardTasks = async (req, res) => {

    const { id } = req.params;

    const boards = await Board.find({});
    const board = await Board.findById(id);
    const tasks = await Task.find({id_board: id});

    res.render('index', {boards: boards , board: board, tasks: tasks});
};

boardCtrl.getBoards = async (req, res) => {

    const boards = await Board.find({});

    res.render('index', { boards: boards });

};

module.exports = boardCtrl;