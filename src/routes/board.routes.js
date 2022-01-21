const express = require("express");
const router = express.Router();

const board = require("../controllers/board.controller");

// Get user boards
router.get("/", board.getBoards);

// Get board tasks 
router.get("/:id", board.getBoardTasks);

// Create new empty board
router.post("/add/", board.addNewEmptyBoard);

// Delete board
router.delete("/delete/:id", board.deleteBoard);


module.exports = router;