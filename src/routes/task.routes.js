const express = require("express");
const router = express.Router();

const task = require("../controllers/task.controller");

router.patch('/move/', task.moveTask);


module.exports = router;