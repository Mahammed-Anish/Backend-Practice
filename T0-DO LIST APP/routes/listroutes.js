const express = require("express");
const router = express.Router();
const listController = require('../controller/listController');

router.get("/",listController.getData);
router.post("/add-task",listController.createTask);
router.get("/delete-task",listController.deleteTask);
module.exports = router;