import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchApplicationsJobs = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/kaju/jobs/apply', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch all applied jobs");
      }

      const data = await response.json();
      setApplications(data);
      setLoading(false);
    } catch (error) {
      console.error("Cannot fetch the applied jobs properly");
      setError("Failed to load applied jobs. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplicationsJobs();
  }, []);

  if (loading) return <div className="text-center mt-10 text-xl text-stone-600">Loading jobs...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-amber-50 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">All Applied Jobs</h2>

        {applications.length === 0 ? (
          <p className="text-center text-stone-500">No applied jobs found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {applications.map((applyjob) => (
              <div
                key={applyjob.id}
                className="p-4 border rounded-lg shadow hover:shadow-lg transition bg-amber-100"
              >
                <h3 className="text-xl font-bold text-emerald-700">{applyjob.position}</h3>
                <p className="text-stone-700">
                  Company: <span className="font-medium">{applyjob.company}</span>
                </p>
                <p className="text-stone-600">
                  Status:{" "}
                  <span
                    className={`font-semibold ${
                      applyjob.status === "pending"
                        ? "text-yellow-600"
                        : applyjob.status === "interview"
                        ? "text-blue-600"
                        : "text-red-600"
                    }`}
                  >
                    {applyjob.status}
                  </span>
                </p>

                <div className="mt-3 flex gap-3">
                  <Link 
                    to={`/jobs/update/${applyjob.id}`} 
                    className="cursor-pointer px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Withdraw Application
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

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

export default Applications;
