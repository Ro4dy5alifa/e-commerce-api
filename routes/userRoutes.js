// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

// List all users (admin only)
router.get('/', authMiddleware, adminMiddleware, userController.listUsers);

// Delete a user (admin only)
router.delete('/:id', authMiddleware, adminMiddleware, userController.deleteUser);

module.exports = router;
