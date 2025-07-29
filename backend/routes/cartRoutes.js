import express from 'express';
import Cart from '../models/cart.js';
import { protect } from '../middleware/authMiddleware.js'; // middleware to check JWT

const router = express.Router();

router.post('/', protect, async (req, res) => {
  const { productId, quantity } = req.body;

  let cart = await Cart.findOne({ user: req.user._id });

  if (!cart) {
    cart = new Cart({ user: req.user._id, items: [] });
  }

  const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

  if (itemIndex > -1) {
    cart.items[itemIndex].quantity = quantity; // update quantity
  } else {
    cart.items.push({ product: productId, quantity });
  }

  await cart.save();
  res.json(cart);
});

export default router;
