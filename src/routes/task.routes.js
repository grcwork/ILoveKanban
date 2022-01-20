const express = require("express");
const router = express.Router();

const task = require("../controllers/task.controller");

router.patch('/move/', task.moveTask);

router.patch('/edit/', task.editTask);

module.exports = router;