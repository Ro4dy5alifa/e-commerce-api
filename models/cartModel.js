const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, default: 1 }
    }
  ],
  status: { type: String, enum: ['Pending', 'Verified', 'Cancelled'], default: 'Pending' }
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;