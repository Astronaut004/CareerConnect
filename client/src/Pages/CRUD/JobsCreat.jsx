import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const JobsCreat = () => {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("pending");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Fetch categories from the database
  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/categories", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) throw new Error("Failed to fetch categories");
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { position, company, status, category };

    try {
      const response = await fetch("http://localhost:5000/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to create job");

      setMessage("✅ Job created successfully!");
      setPosition("");
      setCompany("");
      setStatus("pending");
      setCategory("");

      setTimeout(() => navigate("/dashboard"), 1200);
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to create job.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 pt-32 pb-16 px-4 md:px-6">
      {/* Centered card */}
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 md:p-12 relative overflow-hidden">
        {/* Decorative background circles */}
        <div className="absolute -top-20 -left-20 w-52 h-52 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse"></div>

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
          ➕ Create a New Job
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          {/* Position */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Position</label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder="Frontend Developer"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              required
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Company</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Google"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              required
            >
              <option value="" disabled>
                Select category
              </option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              required
            >
              <option value="pending">Hiring</option>
              <option value="interview">Temporary Halt</option>
              <option value="declined">No Hiring</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold shadow-lg transition transform hover:scale-105"
          >
            🚀 Post Job
          </button>
        </form>

        {/* Success/Error message */}
        {message && (
          <p
            className={`mt-6 text-center text-lg font-medium ${
              message.includes("✅") ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        {/* Back Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-blue-600 hover:underline font-medium"
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobsCreat;
