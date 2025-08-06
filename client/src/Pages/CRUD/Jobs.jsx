import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchJobs = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/jobs', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch all jobs");
      }

      const data = await response.json();
      setJobs(data);
      setLoading(false);
    } catch (error) {
      console.log("Cannot fetch the jobs properly");
      setError("Failed to load jobs. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) return <div className="text-center mt-10 text-xl text-stone-600">Loading jobs...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-amber-50 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">All Jobs</h2>

        {jobs.length === 0 ? (
          <p className="text-center text-stone-500">No jobs found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="p-4 border rounded-lg shadow hover:shadow-lg transition bg-amber-100"
              >
                <h3 className="text-xl font-bold text-emerald-700">{job.position}</h3>
                <p className="text-stone-700">Company: <span className="font-medium">{job.company}</span></p>
                <p className="text-stone-600">
                  Status:{" "}
                  <span
                    className={`font-semibold ${
                      job.status === "pending"
                        ? "text-yellow-600"
                        : job.status === "interview"
                        ? "text-blue-600"
                        : "text-red-600"
                    }`}
                  >
                    {job.status}
                  </span>
                </p>

                <div className="mt-3 flex gap-3">
                  <Link 
                    to={`/jobs/update/${job.id}`} 
                    className="cursor-pointer px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Update Details
                  </Link>
                  <Link 
                    to={`/jobs/delete/${job.id}`} 
                    className="cursor-pointer px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Remove Job
                  </Link>

                  <Link 
                    to={`/jobs/apply/${job.id}`} 
                    className="cursor-pointer px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700"
                  >
                    Apply Job
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Relaxed bottom button */}
      <div className="flex justify-center mt-10">
        <Link
          to="/dashboard"
          className="bg-amber-400 hover:bg-amber-500 text-stone-800 font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
        >
          🌿 Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Jobs;
