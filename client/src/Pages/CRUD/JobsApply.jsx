import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const JobsApply = () => {
  const { id } = useParams(); // Job ID from URL
  const navigate = useNavigate();

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resumeLink, setResumeLink] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resumeLink.startsWith("http")) {
      setError("Please enter a valid resume link (starting with http/https)");
      return;
    }

    setError("");

    const payload = {
      id: id,
      applicant_name: name,
      applicant_email: email,
      resume_link: resumeLink,
    };

    try {
      const response = await fetch(`http://localhost:5000/api/kaju/jobs/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Application submission failed");

      alert("Application submitted successfully!");
      navigate("/Applications");
    } catch (err) {
      console.error(err);
      setError("Failed to submit application");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-emerald-700">
          📄 Apply for Job
        </h2>

        {error && (
          <p className="text-red-500 font-semibold text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-stone-700 mb-2 font-medium">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>
          <div>
            <label className="block text-stone-700 mb-2 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>
          <div>
            <label className="block text-stone-700 mb-2 font-medium">Resume Link (Google Drive, etc.)</label>
            <input
              type="url"
              value={resumeLink}
              onChange={(e) => setResumeLink(e.target.value)}
              placeholder="https://example.com/your-resume.pdf"
              className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg shadow-md transition"
          >
            📬 Submit Application
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

export default JobsApply;
