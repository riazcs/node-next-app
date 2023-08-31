const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/auth');
const authController = require('../controllers/authController');
const TaskManageController = require('../controllers/TaskManageController');
const ProductController = require('../controllers/ProductController');
const CategoryController = require('../controllers/CategoryController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authenticate, authController.logout);

router.get('/tasks', TaskManageController.getAllTasks);
router.post('/tasks', TaskManageController.createTask);
router.get('/tasks/:taskId', TaskManageController.getTaskById);
router.put('/tasks/:taskId', TaskManageController.updateTask);
router.delete('/tasks/:taskId', TaskManageController.deleteTask);

//Products
router.get('/products', ProductController.getAllProducts);
router.post('/products', authenticate, ProductController.createProduct);
router.get('/products/:productId', ProductController.getProductById);
router.put('/products/:productId', ProductController.updateProduct);
router.delete('/products/:productId', ProductController.deleteProduct);

//Category
router.get('/categories', CategoryController.getAllCategory);
router.post('/categories', authenticate, CategoryController.createCategory);
router.get('/categories/:categoryId', CategoryController.getCategoryById);
router.put('/categories/:categoryId', CategoryController.updateCategory);
router.delete('/categories/:categoryId', CategoryController.deleteCategory);


module.exports = router;