import Subscription from '../models/subscriptionModel.js';
import User from '../models/db.js';

// Create Subscription (when company registers)
export const createSubscription = async (req, res) => {
  try {
    const { companyId, plan = 'startup' } = req.body;

    const company = await User.findById(companyId);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    // Plan pricing
    const planPricing = {
      startup: 29,
      professional: 79,
      enterprise: 0, // Custom pricing
    };

    const price = planPricing[plan];
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 1);

    const subscription = new Subscription({
      company: companyId,
      plan,
      status: 'active',
      price,
      startDate: new Date(),
      endDate,
      billingCycle: 'monthly',
    });

    await subscription.save();

    res.status(201).json({
      message: 'Subscription created successfully',
      subscription,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating subscription', error: error.message });
  }
};

// Get Subscription
export const getSubscription = async (req, res) => {
  try {
    const { companyId } = req.params;

    const subscription = await Subscription.findOne({ company: companyId });
    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }

    res.json(subscription);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching subscription', error: error.message });
  }
};

// Upgrade/Downgrade Plan
export const updatePlan = async (req, res) => {
  try {
    const { companyId } = req.params;
    const { newPlan } = req.body;

    const validPlans = ['startup', 'professional', 'enterprise'];
    if (!validPlans.includes(newPlan)) {
      return res.status(400).json({ message: 'Invalid plan' });
    }

    const subscription = await Subscription.findOne({ company: companyId });
    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }

    const planPricing = {
      startup: 29,
      professional: 79,
      enterprise: 0,
    };

    subscription.plan = newPlan;
    subscription.price = planPricing[newPlan];
    subscription.updatedAt = new Date();

    await subscription.save();

    res.json({
      message: 'Plan updated successfully',
      subscription,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating plan', error: error.message });
  }
};

// Cancel Subscription
export const cancelSubscription = async (req, res) => {
  try {
    const { companyId } = req.params;
    const { reason } = req.body;

    const subscription = await Subscription.findOne({ company: companyId });
    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }

    subscription.status = 'cancelled';
    subscription.autoRenew = false;
    subscription.cancellationReason = reason;
    subscription.cancellationDate = new Date();

    await subscription.save();

    res.json({
      message: 'Subscription cancelled successfully',
      subscription,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error cancelling subscription', error: error.message });
  }
};

// Get All Subscriptions (Admin)
export const getAllSubscriptions = async (req, res) => {
  try {
    const { status, plan } = req.query;
    const filter = {};

    if (status) filter.status = status;
    if (plan) filter.plan = plan;

    const subscriptions = await Subscription.find(filter)
      .populate('company', 'email companyName')
      .sort({ createdAt: -1 });

    res.json({
      count: subscriptions.length,
      subscriptions,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching subscriptions', error: error.message });
  }
};

// Check Feature Access
export const checkFeatureAccess = async (req, res) => {
  try {
    const { companyId, feature } = req.params;

    const subscription = await Subscription.findOne({ company: companyId });
    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }

    const hasAccess = subscription.features[feature] === true;

    res.json({
      feature,
      hasAccess,
      plan: subscription.plan,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error checking feature access', error: error.message });
  }
};

// Get Usage Stats
export const getUsageStats = async (req, res) => {
  try {
    const { companyId } = req.params;

    const subscription = await Subscription.findOne({ company: companyId });
    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }

    const limits = {
      startup: { maxJobPostings: 5 },
      professional: { maxJobPostings: -1 },
      enterprise: { maxJobPostings: -1 },
    };

    res.json({
      usage: subscription.usage,
      limits: limits[subscription.plan],
      remaining: {
        jobPostings:
          limits[subscription.plan].maxJobPostings === -1
            ? Infinity
            : limits[subscription.plan].maxJobPostings - subscription.usage.jobPostingsUsed,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching usage stats', error: error.message });
  }
};
