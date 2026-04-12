import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Eye, Edit, Trash2, MoreVertical, Pause, Play } from "lucide-react";
import { designSystem } from "../../config/designSystem";

const CompanyJobList = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      status: "active",
      applications: 24,
      views: 156,
      postedDate: "2024-04-01",
      salary: "$120k - $150k",
      level: "Senior",
    },
    {
      id: 2,
      title: "Product Manager",
      status: "active",
      applications: 18,
      views: 132,
      postedDate: "2024-04-02",
      salary: "$100k - $130k",
      level: "Mid-level",
    },
    {
      id: 3,
      title: "UX Designer",
      status: "paused",
      applications: 15,
      views: 89,
      postedDate: "2024-03-28",
      salary: "$80k - $110k",
      level: "Mid-level",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      status: "active",
      applications: 12,
      views: 98,
      postedDate: "2024-04-05",
      salary: "$110k - $140k",
      level: "Senior",
    },
  ]);

  const toggleStatus = (id) => {
    setJobs(
      jobs.map((job) =>
        job.id === id
          ? { ...job, status: job.status === "active" ? "paused" : "active" }
          : job
      )
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">My Job Posts</h1>
            <p className="text-slate-600 mt-1">Manage and monitor your active job postings</p>
          </div>
          <Link
            to="/company/jobs/create"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Plus size={20} />
            Post New Job
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-4 mb-8 border-b border-slate-200">
          <button className="pb-4 px-4 font-semibold text-blue-600 border-b-2 border-blue-600">
            All
          </button>
          <button className="pb-4 px-4 font-semibold text-slate-600 hover:text-blue-600 transition-colors">
            Active
          </button>
          <button className="pb-4 px-4 font-semibold text-slate-600 hover:text-blue-600 transition-colors">
            Paused
          </button>
          <button className="pb-4 px-4 font-semibold text-slate-600 hover:text-blue-600 transition-colors">
            Closed
          </button>
        </div>

        {/* Jobs Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left py-4 px-6 text-slate-900 font-semibold">Job Title</th>
                  <th className="text-left py-4 px-6 text-slate-900 font-semibold">Status</th>
                  <th className="text-center py-4 px-6 text-slate-900 font-semibold">Applications</th>
                  <th className="text-center py-4 px-6 text-slate-900 font-semibold">Views</th>
                  <th className="text-left py-4 px-6 text-slate-900 font-semibold">Posted</th>
                  <th className="text-left py-4 px-6 text-slate-900 font-semibold">Salary Range</th>
                  <th className="text-center py-4 px-6 text-slate-900 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr
                    key={job.id}
                    className="border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200"
                  >
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-semibold text-slate-900">{job.title}</p>
                        <p className="text-sm text-slate-500 mt-1">{job.level}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          job.status === "active"
                            ? "bg-teal-100 text-teal-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {job.status === "active" ? "Active" : "Paused"}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="font-semibold text-slate-900">{job.applications}</span>
                      <p className="text-sm text-slate-500">applicants</p>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="font-semibold text-slate-900">{job.views}</span>
                      <p className="text-sm text-slate-500">views</p>
                    </td>
                    <td className="py-4 px-6 text-slate-600">{job.postedDate}</td>
                    <td className="py-4 px-6">{job.salary}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => toggleStatus(job.id)}
                          className={`p-2 rounded-lg transition-colors duration-200 ${
                            job.status === "active"
                              ? "bg-red-50 text-red-600 hover:bg-red-100"
                              : "bg-teal-50 text-teal-600 hover:bg-teal-100"
                          }`}
                          title={job.status === "active" ? "Pause" : "Activate"}
                        >
                          {job.status === "active" ? (
                            <Pause size={18} />
                          ) : (
                            <Play size={18} />
                          )}
                        </button>
                        <Link
                          to={`/company/jobs/${job.id}/edit`}
                          className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                        >
                          <Edit size={18} />
                        </Link>
                        <button className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors duration-200">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
            <p className="text-3xl font-bold text-blue-600 mb-2">
              {jobs.length}
            </p>
            <p className="text-slate-600 font-medium">Total Posts</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
            <p className="text-3xl font-bold text-teal-600 mb-2">
              {jobs.filter((j) => j.status === "active").length}
            </p>
            <p className="text-slate-600 font-medium">Active</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
            <p className="text-3xl font-bold text-amber-600 mb-2">
              {jobs.reduce((acc, job) => acc + job.applications, 0)}
            </p>
            <p className="text-slate-600 font-medium">Total Applications</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
            <p className="text-3xl font-bold text-purple-600 mb-2">
              {jobs.reduce((acc, job) => acc + job.views, 0)}
            </p>
            <p className="text-slate-600 font-medium">Total Views</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyJobList;
