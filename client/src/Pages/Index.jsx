import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const user = JSON.parse(localStorage.getItem("user")); // assuming user data after login

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center text-stone-800">
      {/* Welcome Section */}
      <h1 className="text-4xl font-bold mb-4 text-teal-700">
        Welcome back, {user?.name || "User"} 🌱
      </h1>
      <p className="text-lg mb-8 text-stone-600">
        Here’s your Jobify dashboard. Manage jobs and applications with ease ✨
      </p>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-4xl">
        <div className="bg-amber-100 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
          <h2 className="text-3xl font-bold text-teal-600">12</h2>
          <p className="text-lg text-stone-500">Jobs Posted</p>
        </div>
        <div className="bg-emerald-100 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
          <h2 className="text-3xl font-bold text-emerald-700">34</h2>
          <p className="text-lg text-stone-500">Applications</p>
        </div>
        <div className="bg-rose-100 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
          <h2 className="text-3xl font-bold text-rose-600">4</h2>
          <p className="text-lg text-stone-500">Pending Reviews</p>
        </div>
      </div>

      {/* CRUD Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        <Link
          to="/jobs/create"
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg text-center shadow-md"
        >
          ➕ Create Job
        </Link>
        <Link
          to="/jobs"
          className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg text-center shadow-md"
        >
          📄 View Jobs
        </Link>
      </div>
    </div>
  );
};

export default Index;
  