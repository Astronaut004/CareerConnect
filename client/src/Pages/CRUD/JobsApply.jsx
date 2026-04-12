import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CheckCircle2, LoaderCircle, Sparkles, Target, TriangleAlert } from "lucide-react";
import { designSystem } from "../../config/designSystem";

const API_BASE_URL = "http://localhost:5000";

const JobsApply = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [jobInfo, setJobInfo] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resumeLink, setResumeLink] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [error, setError] = useState("");
  const [atsResult, setAtsResult] = useState(null);
  const [isScoring, setIsScoring] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/jobs`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          return;
        }

        const jobs = await response.json();
        const selectedJob = jobs.find((job) => String(job.id) === String(id));
        if (selectedJob) {
          setJobInfo(selectedJob);
        }
      } catch (fetchError) {
        console.error("Failed to fetch job details", fetchError);
      }
    };

    fetchJob();
  }, [id]);

  const handleAtsScore = async () => {
    if (!jobDescription.trim() || !resumeText.trim()) {
      setError("Paste the job description and resume text before running ATS scoring.");
      return;
    }

    setError("");
    setIsScoring(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/ai/ats-score`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          jobTitle: jobInfo?.position || "",
          company: jobInfo?.company || "",
          jobDescription,
          resumeText,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate ATS score");
      }

      setAtsResult(data.analysis);
    } catch (atsError) {
      console.error(atsError);
      setError(atsError.message || "Failed to generate ATS score");
    } finally {
      setIsScoring(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resumeLink.startsWith("http")) {
      setError("Please enter a valid resume link starting with http or https.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    const payload = {
      id,
      applicant_name: name,
      applicant_email: email,
      resume_link: resumeLink,
      ats_analysis: atsResult,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/api/kaju/jobs/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Application submission failed");
      }

      navigate("/applications");
    } catch (submitError) {
      console.error(submitError);
      setError(submitError.message || "Failed to submit application");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f5f7fb_0%,#edf3f8_100%)] px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Application Workspace</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">Apply with ATS feedback</h1>
          <p className="mt-3 max-w-3xl text-lg text-slate-600">
            Paste the job description and your resume text to get an ATS score from your local Ollama model before you submit.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">Applying for</p>
                  <h2 className="mt-1 text-2xl font-semibold text-slate-950">
                    {jobInfo?.position || `Job #${id}`}
                  </h2>
                  <p className="mt-1 text-slate-600">{jobInfo?.company || "Company details not available"}</p>
                </div>
                <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm text-slate-600">
                  ATS-ready workflow
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">Application details</h3>

              {error && (
                <div className="mt-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  <TriangleAlert className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-medium text-slate-700">Full Name</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={designSystem.inputs.base} required />
                </div>
                <div>
                  <label className="mb-2 block font-medium text-slate-700">Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={designSystem.inputs.base} required />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block font-medium text-slate-700">Resume Link</label>
                <input
                  type="url"
                  value={resumeLink}
                  onChange={(e) => setResumeLink(e.target.value)}
                  placeholder="https://example.com/your-resume.pdf"
                  className={designSystem.inputs.base}
                  required
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block font-medium text-slate-700">Job Description</label>
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  rows={8}
                  placeholder="Paste the full job description here for ATS analysis"
                  className={`${designSystem.inputs.base} min-h-44 resize-y`}
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block font-medium text-slate-700">Resume Text</label>
                <textarea
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                  rows={10}
                  placeholder="Paste the resume content here so the AI can compare it with the job description"
                  className={`${designSystem.inputs.base} min-h-52 resize-y`}
                />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handleAtsScore}
                  disabled={isScoring}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isScoring ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                  {isScoring ? "Scoring with Ollama..." : "Analyze ATS Match"}
                </button>
                <button type="submit" disabled={isSubmitting} className={`${designSystem.buttons.primary} disabled:cursor-not-allowed disabled:opacity-70`}>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900">
                <Target className="h-5 w-5" />
                <h3 className="text-xl font-semibold">ATS Result</h3>
              </div>

              {!atsResult ? (
                <div className="mt-5 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-sm text-slate-600">
                  Run the ATS analysis to see a score, matched keywords, missing keywords, and resume improvement suggestions.
                </div>
              ) : (
                <div className="mt-5 space-y-5">
                  <div className="rounded-2xl bg-slate-950 px-5 py-6 text-white">
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-300">Overall ATS Score</p>
                    <div className="mt-3 flex items-end gap-2">
                      <span className="text-5xl font-bold">{atsResult.overall_score}</span>
                      <span className="pb-1 text-slate-300">/100</span>
                    </div>
                    <p className="mt-4 text-sm text-slate-200">{atsResult.summary}</p>
                  </div>

                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                    <h4 className="font-semibold text-emerald-900">Matched Keywords</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {atsResult.matched_keywords?.length ? atsResult.matched_keywords.map((item) => (
                        <span key={item} className="rounded-full bg-white px-3 py-1 text-sm text-emerald-700 shadow-sm">
                          {item}
                        </span>
                      )) : <span className="text-sm text-emerald-800">No strong keyword matches detected yet.</span>}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h4 className="font-semibold text-amber-900">Missing Keywords</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {atsResult.missing_keywords?.length ? atsResult.missing_keywords.map((item) => (
                        <span key={item} className="rounded-full bg-white px-3 py-1 text-sm text-amber-700 shadow-sm">
                          {item}
                        </span>
                      )) : <span className="text-sm text-amber-800">No major keyword gaps detected.</span>}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <h4 className="font-semibold text-slate-900">Strengths</h4>
                    <div className="mt-3 space-y-3">
                      {atsResult.strengths?.map((item) => (
                        <div key={item} className="flex items-start gap-3 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <h4 className="font-semibold text-slate-900">Improvements</h4>
                    <div className="mt-3 space-y-3">
                      {atsResult.improvements?.map((item) => (
                        <div key={item} className="flex items-start gap-3 text-sm text-slate-700">
                          <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">Before you score</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>Paste the full job description, not just the title.</li>
                <li>Paste resume text in plain text form for better keyword analysis.</li>
                <li>Make sure Ollama is running locally with the `qwen2.5` model available.</li>
              </ul>
            </div>

            <button onClick={() => navigate("/jobs")} className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950">
              Back to Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsApply;
