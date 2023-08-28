const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const TaskManageController = require('../controllers/TaskManageController');
const ProductController = require('../controllers/ProductController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.get('/tasks', TaskManageController.getAllTasks);
router.post('/tasks', TaskManageController.createTask);
router.get('/tasks/:taskId', TaskManageController.getTaskById);
router.put('/tasks/:taskId', TaskManageController.updateTask);
router.delete('/tasks/:taskId', TaskManageController.deleteTask);

//Products
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
router.get('/products/:productId', ProductController.getProductById);
router.put('/products/:productId', ProductController.updateProduct);
router.delete('/products/:productId', ProductController.deleteProduct);


module.exports = router;