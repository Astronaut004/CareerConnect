import React, { useState, useEffect } from "react";
import { Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Users, Briefcase, TrendingUp, DollarSign, Plus, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { designSystem } from "../../config/designSystem";

const CompanyDashboard = () => {
  const [stats, setStats] = useState({
    activeJobs: 12,
    totalApplications: 347,
    hiredCandidates: 28,
    monthlyHires: 8,
  });

  const jobPerformanceData = [
    { month: "Jan", applications: 45, hired: 3 },
    { month: "Feb", applications: 52, hired: 4 },
    { month: "Mar", applications: 48, hired: 3 },
    { month: "Apr", applications: 61, hired: 5 },
    { month: "May", applications: 55, hired: 4 },
    { month: "Jun", applications: 67, hired: 8 },
  ];

  const departmentData = [
    { name: "Engineering", value: 5, color: "#3b82f6" },
    { name: "Sales", value: 3, color: "#14b8a6" },
    { name: "Marketing", value: 2, color: "#f59e0b" },
    { name: "Design", value: 2, color: "#8b5cf6" },
  ];

  const recentApplications = [
    { id: 1, name: "Alex Johnson", position: "Senior Developer", status: "Review", date: "2024-04-10" },
    { id: 2, name: "Sarah Williams", position: "Product Manager", status: "Interview", date: "2024-04-09" },
    { id: 3, name: "Mike Chen", position: "UX Designer", status: "Offer", date: "2024-04-08" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-slate-600 mt-1">Welcome back! Here's your hiring overview.</p>
          </div>
          <Link
            to="/company/jobs/create"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Plus size={20} />
            Post New Job
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-600 font-medium">Active Jobs</h3>
              <Briefcase className="text-blue-600 w-6 h-6" />
            </div>
            <p className="text-3xl font-bold text-slate-900">{stats.activeJobs}</p>
            <p className="text-sm text-slate-500 mt-2">2 new this month</p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-600 font-medium">Total Applications</h3>
              <Users className="text-teal-600 w-6 h-6" />
            </div>
            <p className="text-3xl font-bold text-slate-900">{stats.totalApplications}</p>
            <p className="text-sm text-slate-500 mt-2">34 pending review</p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-600 font-medium">Hired This Year</h3>
              <TrendingUp className="text-blue-600 w-6 h-6" />
            </div>
            <p className="text-3xl font-bold text-slate-900">{stats.hiredCandidates}</p>
            <p className="text-sm text-slate-500 mt-2">+10% from last year</p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-600 font-medium">Monthly Cost/Hire</h3>
              <DollarSign className="text-blue-600 w-6 h-6" />
            </div>
            <p className="text-3xl font-bold text-slate-900">$1,250</p>
            <p className="text-sm text-slate-500 mt-2">Optimized pricing</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {/* Line Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-200">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">Hiring Trends</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={jobPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="applications" fill="#3b82f6" name="Applications" />
                <Bar dataKey="hired" fill="#14b8a6" name="Hired" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-200">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">Jobs by Department</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Applications */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-slate-900">Recent Applications</h2>
            <Link to="/company/applications" className="text-blue-600 hover:text-blue-700 font-medium">
              View All →
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-slate-600 font-medium">Name</th>
                  <th className="text-left py-3 px-4 text-slate-600 font-medium">Position</th>
                  <th className="text-left py-3 px-4 text-slate-600 font-medium">Status</th>
                  <th className="text-left py-3 px-4 text-slate-600 font-medium">Date</th>
                  <th className="text-left py-3 px-4 text-slate-600 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentApplications.map((app) => (
                  <tr key={app.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4">{app.name}</td>
                    <td className="py-4 px-4 text-slate-600">{app.position}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        app.status === "Review" ? "bg-blue-100 text-blue-700" :
                        app.status === "Interview" ? "bg-amber-100 text-amber-700" :
                        "bg-teal-100 text-teal-700"
                      }`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-slate-600">{app.date}</td>
                    <td className="py-4 px-4">
                      <button className="text-blue-600 hover:text-blue-700 font-medium">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
