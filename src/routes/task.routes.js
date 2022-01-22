const express = require("express");
const router = express.Router();

const task = require("../controllers/task.controller");

router.patch("/move/", task.moveTask);

router.patch("/edit/", task.editTask);

router.post("/add/", task.addNewEmptyTask);

router.delete("/delete/", task.deleteTask);

module.exports = router;
