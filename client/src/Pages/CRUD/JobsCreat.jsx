import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JobsCreat = () => {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("pending");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { position, company, status };

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

      if (!response.ok) throw new Error("Failed to create job");

      setMessage("✅ Job created successfully!");
      console.log("Job created:", data);

      setPosition("");
      setCompany("");
      setStatus("pending");

      setTimeout(() => navigate("/dashboard"), 1200);
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to create job.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50">
      <div className="bg-amber-100 p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-emerald-700 mb-6">
          ➕ Create New Job
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Position */}
          <div>
            <label className="block text-stone-700 font-medium mb-1">Position</label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder="Frontend Developer"
              className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-stone-700 font-medium mb-1">Company</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Google"
              className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-stone-700 font-medium mb-1">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
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
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg shadow-md transition"
          >
            🚀 Post Job
          </button>
        </form>

        {/* Success/Error message */}
        {message && (
          <p
            className={`mt-4 text-center text-lg font-medium ${
              message.includes("✅") ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        {/* Back Button */}
        <div className="mt-4 text-center">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-amber-600 hover:underline"
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobsCreat;