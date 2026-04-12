import { scoreResumeWithOllama } from "../services/atsScoringService.js";

export const scoreResumeAts = async (req, res) => {
  const { jobTitle = "", company = "", jobDescription = "", resumeText = "" } = req.body;

  if (!jobDescription.trim() || !resumeText.trim()) {
    return res.status(400).json({
      error: "Job description and resume text are required for ATS scoring.",
    });
  }

  try {
    const analysis = await scoreResumeWithOllama({
      jobTitle,
      company,
      jobDescription,
      resumeText,
    });

    res.status(200).json({
      message: "ATS score generated successfully.",
      analysis,
    });
  } catch (error) {
    console.error("ATS scoring failed:", error.message);
    res.status(500).json({
      error: "Failed to generate ATS score. Make sure Ollama is running locally.",
    });
  }
};
