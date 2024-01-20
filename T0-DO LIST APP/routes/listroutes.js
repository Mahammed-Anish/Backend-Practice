const express = require("express");
const router = express.Router();
const listController = require("../controller/listController");

router.get("/", listController.getData);
router.get("/allTasks", listController.allTasks);
router.post("/add-task", listController.createTask);
router.get("/delete-task", listController.deleteTask);
router.get("/signup", listController.signup);
router.get("/signin", listController.signin);
router.post("/create-user", listController.createUser);
router.post("/verify-login", listController.verifyLogin);
module.exports = router;
