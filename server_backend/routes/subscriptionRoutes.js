import express from 'express';
import {
  createSubscription,
  getSubscription,
  updatePlan,
  cancelSubscription,
  getAllSubscriptions,
  checkFeatureAccess,
  getUsageStats,
} from '../Controllers/subscriptionController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Create subscription (called during company registration)
router.post('/create', authMiddleware, createSubscription);

// Get company subscription
router.get('/:companyId', authMiddleware, getSubscription);

// Update plan
router.put('/:companyId/plan', authMiddleware, updatePlan);

// Cancel subscription
router.delete('/:companyId/cancel', authMiddleware, cancelSubscription);

// Get all subscriptions (admin only)
router.get('/admin/all', authMiddleware, getAllSubscriptions);

// Check feature access
router.get('/:companyId/feature/:feature', authMiddleware, checkFeatureAccess);

// Get usage stats
router.get('/:companyId/usage', authMiddleware, getUsageStats);

export default router;
