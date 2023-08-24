const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const TaskManageController = require('../controllers/TaskManageController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.get('/tasks', TaskManageController.getAllTasks);
router.post('/tasks', TaskManageController.createTask);
router.get('/tasks/:taskId', TaskManageController.getTaskById);
router.put('/tasks/:taskId', TaskManageController.updateTask);
router.delete('/tasks/:taskId', TaskManageController.deleteTask);


module.exports = router;