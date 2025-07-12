import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const JobsUpd = () => {
  const { id } = useParams(); // 👈 get job ID from URL
  const navigate = useNavigate();
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("pending");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch job details
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/jobs/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (!response.ok) throw new Error("Failed to fetch job");

        const data = await response.json();
        setPosition(data.position);
        setCompany(data.company);
        setStatus(data.status);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Could not load job details");
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  // Handle update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/jobs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ position, company, status }),
      });

      if (!response.ok) throw new Error(`Failed to update job ${response}`);

      console.log("Job updated successfully");
      navigate("/jobs"); // Redirect back to jobs list
    } catch (err) {
      console.error(err);
      setError("Update failed");
    }
  };

  if (loading)
    return (
      <p className="text-center mt-10 text-stone-600 text-lg">Loading job details...</p>
    );
  if (error)
    return (
      <p className="text-center mt-10 text-red-500 font-semibold">{error}</p>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-emerald-700">
          ✏️ Update Job
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-stone-700 mb-2 font-medium">Position</label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>
          <div>
            <label className="block text-stone-700 mb-2 font-medium">Company</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>
          <div>
            <label className="block text-stone-700 mb-2 font-medium">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <option value="pending">Pending</option>
              <option value="interview">Interview</option>
              <option value="declined">Declined</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg shadow-md transition"
          >
            ✅ Save Changes
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() => navigate("/jobs")}
            className="cursor-pointer text-amber-600 hover:underline"
          >
            ← Back to Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobsUpd;
