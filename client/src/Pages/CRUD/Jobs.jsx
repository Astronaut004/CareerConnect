import React, { useEffect, useState } from "react";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchJobs = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/jobs', {
        method: 'GET',
        headers: {
          "Content-Type" : "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if(!response.ok) {
        throw new Error("Failed to fetch all jobs");
      }

      const data = await response.json();
      setJobs(data);
      setLoading(false);
    }
    catch (error) {
      console.log("Cannot fetch the jobs properly");  
      setError("Failed to load jobs. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) return <div className="text-center mt-10 text-xl">Loading jobs...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">All Jobs</h2>

        {jobs.length === 0 ? (
          <p className="text-center text-gray-600">No jobs found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="p-4 border rounded-lg shadow hover:shadow-md transition"
              >
                <h3 className="text-xl font-bold">{job.position}</h3>
                <p className="text-gray-700">Company: {job.company}</p>
                <p className="text-gray-500">Status: <span className={`font-semibold ${job.status === 'pending' ? 'text-yellow-500' : job.status === 'interview' ? 'text-blue-500' : 'text-red-500'}`}>{job.status}</span></p>

                <div className="mt-3 flex gap-2">
                  <button className="cursor-pointer px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Edit
                  </button>
                  <button className="cursor-pointer px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
