import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Categories from "./Categories";

const Index = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 text-gray-800">
      {/* Navbar */}
      <header className="w-full py-4 px-8 flex justify-between items-center shadow-sm bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-2xl font-extrabold">
          <span className="text-slate-900">Job</span>
          <span className="text-blue-600">ify</span>
        </h1>
        <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
          <Link to="/jobs" className="hover:text-blue-600 transition">
            Jobs
          </Link>
          <Link to="/applications" className="hover:text-blue-600 transition">
            Applications
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>
        </nav>
        <div className="flex gap-4 items-center">
          {user ? (
            <>
              <span className="text-gray-700 font-medium hidden sm:inline">
                Hi, {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition shadow-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-sm"
            >
              Sign In
            </Link>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-blue-700 leading-tight drop-shadow-sm">
          Your Career, <span className="text-blue-500">Simplified</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover opportunities, post jobs, and track applications — all in one
          intuitive platform designed to connect talent with opportunity.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/jobs"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Explore Jobs
          </Link>
          <Link
            to="/jobs/create"
            className="bg-gray-200 text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition shadow-md"
          >
            Post a Job
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6 mb-20">
        {[
          { number: "12k+", label: "Jobs Posted", color: "text-blue-600" },
          { number: "34k+", label: "Applications Submitted", color: "text-blue-500" },
          { number: "4.9⭐", label: "User Satisfaction", color: "text-blue-700" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-10 shadow hover:shadow-xl transition transform hover:-translate-y-1 text-center"
          >
            <h3 className={`text-4xl font-bold ${stat.color}`}>{stat.number}</h3>
            <p className="text-gray-500 mt-2">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-6 rounded-t-3xl shadow-inner">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose <span className="text-blue-600">Jobify?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "AI-Powered Matching",
              desc: "Get smart recommendations tailored to your skills and goals.",
            },
            {
              title: "Simple Dashboard",
              desc: "Manage jobs, applications, and reviews all in one place.",
            },
            {
              title: "Trusted Companies",
              desc: "Work with verified employers across industries worldwide.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-10 rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-1 bg-gradient-to-br from-blue-50 to-white"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
  
      {/* Companies Section */}
      < Categories/>
      {/* Final CTA */}
      <section className="py-24 text-center px-6">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">
          Ready to Land Your Dream Job?
        </h2>
        <p className="text-gray-600 mb-8">
          Join thousands of professionals and employers on Jobify today.
        </p>
        <Link
          to="/register"
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-xl"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default Index;
