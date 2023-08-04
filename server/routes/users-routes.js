const express = require("express");

const router = express.Router();

const userController = require("../controllers/users-controller");

router.post("/login", userController.login);
router.get('/', userController.getUsers)
router.get('/:userId', userController.getUserById)
router.post('/register', userController.register)
router.patch('/update/:userId', userController.updateUser)

module.exports = router;
