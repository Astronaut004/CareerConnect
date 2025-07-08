import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const JobsCreat = () => {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("pending"); // Default status
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {position, company, status};
    
    try {
      const response = await fetch('http://localhost:5000/api/jobs', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(payload),
      })
      const data = await response.json();
      setMessage("✅ Job created successfully!");
      console.log("Job created:", data);

      setPosition(""); setCompany(""); setStatus("pending");
      if(response.ok) {
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      }

    }
    catch(err) {
      console.log(err);
      
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Create New Job</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Position */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Position</label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder="Frontend Developer"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="pending">Hiring</option>
              <option value="interview">Temperory halt</option>
              <option value="declined">No Hiring</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
          >
            Post Job
          </button>
        </form>

        {/* Success/Error message */}
        {message && (
          <p className="mt-4 text-center text-lg font-medium text-green-600">{message}</p>
        )}
      </div>
    </div>
  );
};

export default JobsCreat;
