const express = require("express");
const router = express.Router();

const board = require("../controllers/board.controller");

// Get user boards
router.get("/", board.getBoards);

// Get board tasks 
router.get("/:id", board.getBoardTasks);


module.exports = router;