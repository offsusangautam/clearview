import express from 'express';
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getAllOrders,
  updateOrderToDelivered,
} from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

// Create new order
router.route('/').post(protect, addOrderItems);

// Get all orders (admin)
router.route('/').get(protect, admin, getAllOrders);

// Get my orders
router.route('/myorders').get(protect, getMyOrders);

// Get order by ID
router.route('/:id').get(protect, getOrderById);

// Update order to paid
router.route('/:id/pay').put(protect, updateOrderToPaid);

// Update order to delivered
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);

export default router;
