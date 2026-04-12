import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema(
  {
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    plan: {
      type: String,
      enum: ['startup', 'professional', 'enterprise'],
      default: 'startup',
    },
    status: {
      type: String,
      enum: ['active', 'cancelled', 'expired', 'pending'],
      default: 'active',
    },
    price: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      default: 'USD',
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
    endDate: {
      type: Date,
      required: true,
    },
    renewalDate: {
      type: Date,
    },
    billingCycle: {
      type: String,
      enum: ['monthly', 'yearly'],
      default: 'monthly',
    },
    paymentMethod: {
      type: String,
      enum: ['credit_card', 'stripe', 'paypal'],
    },
    features: {
      maxJobPostings: {
        type: Number,
        default: function () {
          const plans = { startup: 5, professional: -1, enterprise: -1 };
          return plans[this.plan] || 5;
        },
      },
      advancedAnalytics: {
        type: Boolean,
        default: function () {
          return this.plan !== 'startup';
        },
      },
      prioritySupport: {
        type: Boolean,
        default: function () {
          return this.plan !== 'startup';
        },
      },
      customDomain: {
        type: Boolean,
        default: function () {
          return this.plan === 'enterprise';
        },
      },
      apiAccess: {
        type: Boolean,
        default: function () {
          return this.plan === 'professional' || this.plan === 'enterprise';
        },
      },
      whiteLabel: {
        type: Boolean,
        default: function () {
          return this.plan === 'enterprise';
        },
      },
    },
    usage: {
      jobPostingsUsed: {
        type: Number,
        default: 0,
      },
      apiCallsUsed: {
        type: Number,
        default: 0,
      },
      storageUsed: {
        type: Number,
        default: 0, // in MB
      },
    },
    autoRenew: {
      type: Boolean,
      default: true,
    },
    cancellationReason: String,
    cancellationDate: Date,
    notes: String,
  },
  { timestamps: true }
);

// Index for efficient queries
subscriptionSchema.index({ company: 1, status: 1 });
subscriptionSchema.index({ renewalDate: 1 });

export default mongoose.model('Subscription', subscriptionSchema);
