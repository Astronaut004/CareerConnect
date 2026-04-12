import React, { useState } from "react";
import { User, CreditCard, Lock, Bell, LogOut, ChevronRight, Check, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CompanySettings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [companyData, setCompanyData] = useState({
    companyName: "TechFlow Inc.",
    industry: "Technology",
    companySize: "51-200",
    website: "https://techflow.com",
    email: "admin@techflow.com",
  });

  const [subscriptionData] = useState({
    plan: "professional",
    status: "active",
    price: "$79/month",
    renewalDate: "2024-05-15",
    features: [
      "Unlimited job postings",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Custom career page",
    ],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompanyData({ ...companyData, [name]: value });
  };

  const tabs = [
    { id: "profile", label: "Company Profile", icon: User },
    { id: "billing", label: "Billing & Subscription", icon: CreditCard },
    { id: "security", label: "Security", icon: Lock },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Settings</h1>
          <p className="text-slate-600">Manage your company account and preferences</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 sticky top-24">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                        activeTab === tab.id
                          ? "bg-blue-100 text-blue-700 font-medium"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <Icon size={18} />
                      <span className="text-sm">{tab.label}</span>
                    </button>
                  );
                })}
                <hr className="my-4 border-slate-200" />
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors duration-200 text-sm font-medium">
                  <LogOut size={18} />
                  Logout
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Company Profile Tab */}
            {activeTab === "profile" && (
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">Company Profile</h2>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={companyData.companyName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Industry
                      </label>
                      <input
                        type="text"
                        name="industry"
                        value={companyData.industry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Company Size
                      </label>
                      <input
                        type="text"
                        name="companySize"
                        value={companyData.companySize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Website
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={companyData.website}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={companyData.email}
                      disabled
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-slate-50 text-slate-600 cursor-not-allowed"
                    />
                    <p className="text-xs text-slate-500 mt-1">Email cannot be changed</p>
                  </div>

                  <div className="pt-6 border-t border-slate-200 flex gap-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                      Save Changes
                    </button>
                    <button className="border border-slate-300 text-slate-700 px-6 py-2 rounded-lg font-medium hover:bg-slate-50 transition-colors duration-200">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Billing & Subscription Tab */}
            {activeTab === "billing" && (
              <div className="space-y-8">
                {/* Current Plan */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mb-6">Current Plan</h2>

                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-8 border border-blue-200 mb-6">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 capitalize mb-2">
                          {subscriptionData.plan} Plan
                        </h3>
                        <p className="text-slate-600 flex items-center gap-2">
                          <Check size={18} className="text-teal-600" />
                          <span>
                            <strong>Status:</strong> {subscriptionData.status
                              .charAt(0)
                              .toUpperCase() + subscriptionData.status.slice(1)}
                          </span>
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-slate-900">{subscriptionData.price}</p>
                        <p className="text-sm text-slate-600 mt-1">Billed monthly</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-700 mb-3">Included Features:</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {subscriptionData.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-slate-700">
                            <Check size={16} className="text-teal-600" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-sm text-slate-600 mt-6">
                      Renews on: <strong>{subscriptionData.renewalDate}</strong>
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Link
                      to="/pricing"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                    >
                      Upgrade Plan
                    </Link>
                    <button className="border border-red-300 text-red-600 px-6 py-2 rounded-lg font-medium hover:bg-red-50 transition-colors duration-200">
                      Cancel Subscription
                    </button>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8">
                  <h2 className="text-xl font-semibold text-slate-900 mb-6">Payment Method</h2>

                  <div className="flex items-center justify-between p-6 border border-slate-200 rounded-lg mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">
                        VISA
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Visa ending in 4242</p>
                        <p className="text-sm text-slate-500">Expires 12/26</p>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">Edit</button>
                  </div>

                  <button className="border border-slate-300 text-slate-700 px-6 py-2 rounded-lg font-medium hover:bg-slate-50 transition-colors duration-200">
                    Add Payment Method
                  </button>
                </div>

                {/* Billing History */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8">
                  <h2 className="text-xl font-semibold text-slate-900 mb-6">Billing History</h2>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="text-left py-3 px-4 text-slate-900 font-medium">Date</th>
                          <th className="text-left py-3 px-4 text-slate-900 font-medium">Description</th>
                          <th className="text-left py-3 px-4 text-slate-900 font-medium">Amount</th>
                          <th className="text-left py-3 px-4 text-slate-900 font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-100 hover:bg-slate-50">
                          <td className="py-3 px-4">Apr 15, 2024</td>
                          <td className="py-3 px-4">Professional Plan</td>
                          <td className="py-3 px-4">$79.00</td>
                          <td className="py-3 px-4">
                            <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-medium">
                              Paid
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">Security Settings</h2>

                <div className="space-y-6">
                  {/* Change Password */}
                  <div className="pb-6 border-b border-slate-200">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          Current Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          New Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 w-full md:w-auto">
                        Update Password
                      </button>
                    </div>
                  </div>

                  {/* Two-Factor Authentication */}
                  <div className="pb-6 border-b border-slate-200">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Two-Factor Authentication</h3>
                    <p className="text-slate-600 mb-4">
                      Add an extra layer of security to your account
                    </p>
                    <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200">
                      Enable 2FA
                    </button>
                  </div>

                  {/* Active Sessions */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Active Sessions</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                        <div>
                          <p className="font-medium text-slate-900">Chrome on Windows</p>
                          <p className="text-sm text-slate-500">Last active: Now</p>
                        </div>
                        <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-medium">
                          Current
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === "notifications" && (
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">Notification Preferences</h2>

                <div className="space-y-6">
                  {[
                    {
                      title: "New Applications",
                      description: "Get notified when candidates apply to your jobs",
                      enabled: true,
                    },
                    {
                      title: "Billing Alerts",
                      description: "Notifications about upcoming invoices and payment issues",
                      enabled: true,
                    },
                    {
                      title: "Job Performance",
                      description: "Weekly reports on your job post performance",
                      enabled: false,
                    },
                    {
                      title: "Product Updates",
                      description: "Latest features and improvements to CareerConnect",
                      enabled: true,
                    },
                  ].map((notification, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 border border-slate-200 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-slate-900">{notification.title}</p>
                        <p className="text-sm text-slate-600">{notification.description}</p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked={notification.enabled}
                        className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                  ))}
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 w-full md:w-auto">
                    Save Preferences
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySettings;
