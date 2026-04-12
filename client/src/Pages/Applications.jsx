import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Sparkles, TriangleAlert } from "lucide-react";
import { designSystem } from "../config/designSystem";

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleWithdraw = async (id, email) => {
    const confirmWithdraw = window.confirm("Are you sure you want to withdraw this application?");
    if (!confirmWithdraw) return;

    try {
      const response = await fetch(`http://localhost:5000/api/kaju/jobs/withdraw/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ applicant_email: email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to withdraw application");
      }

      setApplications((prev) => prev.filter((app) => app.id !== id));
    } catch (withdrawError) {
      console.error("Withdrawal failed:", withdrawError);
      alert("Something went wrong. Please try again.");
    }
  };

  const fetchApplicationsJobs = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/kaju/jobs/apply", {
        method: "GET",
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
    } catch (fetchError) {
      console.error("Cannot fetch the applied jobs properly", fetchError);
      setError("Failed to load applied jobs. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplicationsJobs();
  }, []);

  if (loading) {
    return <div className="mt-10 text-center text-xl text-slate-600">Loading jobs...</div>;
  }

  if (error) {
    return <div className="mt-10 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f5f7fb_0%,#edf3f8_100%)] p-6 pt-28">
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-2 text-center text-3xl font-bold text-slate-950">All Applied Jobs</h2>
        <p className="mb-8 text-center text-slate-600">Review your submitted applications and the saved ATS match score for each one.</p>

        {applications.length === 0 ? (
          <p className="text-center text-slate-500">No applied jobs found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-5">
            {applications.map((applyjob) => (
              <div key={applyjob.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{applyjob.position}</h3>
                    <p className="mt-1 text-slate-700">
                      Company: <span className="font-medium">{applyjob.company}</span>
                    </p>
                    <p className="mt-1 text-slate-600">
                      Status:{" "}
                      <span
                        className={`font-semibold ${
                          applyjob.status === "pending"
                            ? "text-amber-600"
                            : applyjob.status === "interview"
                              ? "text-blue-600"
                              : "text-emerald-600"
                        }`}
                      >
                        {applyjob.status}
                      </span>
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-950 px-5 py-4 text-white md:min-w-44">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-300">ATS Score</p>
                    <p className="mt-2 text-4xl font-bold">{applyjob.ats_score ?? "--"}</p>
                  </div>
                </div>

                {applyjob.ats_summary && (
                  <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                    <div className="flex items-center gap-2 font-semibold text-slate-900">
                      <Sparkles className="h-4 w-4 text-blue-600" /> ATS Summary
                    </div>
                    <p className="mt-2">{applyjob.ats_summary}</p>
                  </div>
                )}

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                    <h4 className="font-semibold text-emerald-900">Matched Keywords</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {applyjob.ats_matched_keywords?.length ? applyjob.ats_matched_keywords.map((item) => (
                        <span key={item} className="rounded-full bg-white px-3 py-1 text-sm text-emerald-700 shadow-sm">{item}</span>
                      )) : <span className="text-sm text-emerald-800">No saved keyword matches.</span>}
                    </div>
                  </div>

                  <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                    <h4 className="font-semibold text-amber-900">Missing Keywords</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {applyjob.ats_missing_keywords?.length ? applyjob.ats_missing_keywords.map((item) => (
                        <span key={item} className="rounded-full bg-white px-3 py-1 text-sm text-amber-700 shadow-sm">{item}</span>
                      )) : <span className="text-sm text-amber-800">No saved keyword gaps.</span>}
                    </div>
                  </div>
                </div>

                {(applyjob.ats_strengths?.length || applyjob.ats_improvements?.length) && (
                  <div className="mt-4 grid gap-4 lg:grid-cols-2">
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <h4 className="font-semibold text-slate-900">Strengths</h4>
                      <div className="mt-3 space-y-2">
                        {applyjob.ats_strengths?.length ? applyjob.ats_strengths.map((item) => (
                          <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                            <span>{item}</span>
                          </div>
                        )) : <span className="text-sm text-slate-500">No saved strengths.</span>}
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <h4 className="font-semibold text-slate-900">Improvements</h4>
                      <div className="mt-3 space-y-2">
                        {applyjob.ats_improvements?.length ? applyjob.ats_improvements.map((item) => (
                          <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                            <TriangleAlert className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
                            <span>{item}</span>
                          </div>
                        )) : <span className="text-sm text-slate-500">No saved improvements.</span>}
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => handleWithdraw(applyjob.id, applyjob.applicant_email)}
                    className="cursor-pointer rounded-lg bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
                  >
                    Withdraw Application
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-10 flex justify-center">
        <Link to="/profile" className={designSystem.buttons.primary}>
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Applications;
