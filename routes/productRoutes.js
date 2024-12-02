// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

// Get all products
router.get('/', productController.getProducts);

// Create a new product (admin only)
router.post('/', authMiddleware, adminMiddleware, productController.createProduct);

// Get a single product by ID
router.get('/:id', productController.getProductById);

// Update a product (admin only)
router.put('/:id', authMiddleware, adminMiddleware, productController.updateProduct);

// Delete a product (admin only)
router.delete('/:id', authMiddleware, adminMiddleware, productController.deleteProduct);

module.exports = router;
