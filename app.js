// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB', err));

// Routes
app.use('/api/auth', authRoutes);         // Authentication routes
app.use('/api/products', productRoutes);  // Product management routes
app.use('/api/users', userRoutes);        // User management routes
app.use('/api/cart', cartRoutes);         // Cart and order management routes

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZDZlMDgxNTRjYmU3YzhmNzU5NTZkMSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MjUzNTg1MDEsImV4cCI6MTcyNTM2MjEwMX0.rxxtW3o823JIGwsFmlgaktQRMq5SMvOLPr-w9LF1NqQ