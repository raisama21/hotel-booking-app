const express = require("express");
const router = express.Router();
const registerController = require("../../controllers/registerController");
const authController = require("../../controllers/authController");
const userController = require("../../controllers/userController");

router.post("/register", registerController.handleNewUser);

router.post("/auth", authController.handleLogin);

router.put("/update/:id", userController.updateUser);

router.delete("delete/:id", userController.deleteUser);

module.exports = router;
