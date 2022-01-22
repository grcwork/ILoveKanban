const Task = require("../models/Task");
const Board = require("../models/Board");

const boardCtrl = {};

boardCtrl.getBoardTasks = async (req, res) => {
  const { id } = req.params;

  const boards = await Board.find({});
  const board = await Board.findById(id);
  const tasks = await Task.find({ id_board: id });

  let completionRate = 0;
  let totalTasks = tasks.length;
  let completedTasks = 0;

  for (let i = 0; i < totalTasks; i++) {
    if (tasks[i].status == "done") {
      completedTasks++;
    }
  }
  completionRate = completedTasks / totalTasks;

  res.render("index", { boards, board, tasks, completionRate });
};

boardCtrl.getBoards = async (req, res) => {
  const boards = await Board.find({});

  res.render("index", { boards: boards });
};

boardCtrl.addNewEmptyBoard = async (req, res) => {
  const newBoard = new Board({
    title: "New Proyect",
  });
  await newBoard.save();
  res.send({ redirect: `/board/${newBoard.id}` });
};

boardCtrl.deleteBoard = async (req, res) => {
  const { id } = req.params;
  await Board.deleteOne({ _id: id });
  await Task.deleteMany({ id_board: id });
  res.send({});
};

boardCtrl.editBoard = async (req, res) => {
  const { boardId, newTitle } = req.body;
  await Board.updateOne({ _id: boardId }, { title: newTitle });
  res.send({});
};

module.exports = boardCtrl;
