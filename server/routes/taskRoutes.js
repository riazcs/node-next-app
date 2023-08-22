const express = require('express');
const router = express.Router();
const TaskManageController = require('../controllers/TaskManageController');

router.get('/tasks', TaskManageController.getAllTasks);
router.post('/tasks', TaskManageController.createTask);
router.get('/tasks/:taskId', TaskManageController.getTaskById);
router.put('/tasks/:taskId', TaskManageController.updateTask);
router.delete('/tasks/:taskId', TaskManageController.deleteTask);

module.exports = router;
