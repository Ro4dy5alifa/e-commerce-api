// middlewares/adminMiddleware.js

// Middleware to check if the user is an admin
const adminMiddleware = (req, res, next) => {
    // Check if the user is an admin
    if (!req.user || !req.user.isAdmin) {
      return res.status(403).json({ message: 'Access denied, admin only' });
    }
    next();
  };
  
  module.exports = adminMiddleware;
  