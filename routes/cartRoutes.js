// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const authMiddleware = require('../middlewares/authMiddleware');

// Add product to cart
router.post('/add', authMiddleware, cartController.addToCart);

// Verify the order
router.post('/verify', authMiddleware, cartController.verifyOrder);

// Cancel the order
router.post('/cancel', authMiddleware, cartController.cancelOrder);

module.exports = router;
