// controllers/cartController.js
const Cart = require('../models/cartModel');
const Product = require('../models/productModel');

// Add product to cart
exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    let cart = await Cart.findOne({ user: req.user.id, status: 'Pending' });
    if (!cart) {
      cart = new Cart({ user: req.user.id, products: [] });
    }

    // Add product to the cart
    cart.products.push({ product: productId, quantity });
    await cart.save();

    res.status(200).json({ message: 'Product added to cart', cart });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Verify the order
exports.verifyOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id, status: 'Pending' });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.status = 'Verified';
    await cart.save();

    res.status(200).json({ message: 'Order verified', cart });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Cancel the order
exports.cancelOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id, status: 'Pending' });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.status = 'Cancelled';
    await cart.save();

    res.status(200).json({ message: 'Order cancelled', cart });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
