const OLLAMA_URL = process.env.OLLAMA_URL || "http://127.0.0.1:11434";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || "qwen2.5";

const buildPrompt = ({ jobTitle = "", company = "", jobDescription = "", resumeText = "" }) => `
You are an ATS resume evaluator.
Return only valid JSON with no markdown fences and no extra text.

Score the resume against the job description on a 0-100 scale.
Be practical and concise.

Required JSON shape:
{
  "overall_score": number,
  "summary": "short string",
  "matched_keywords": ["keyword"],
  "missing_keywords": ["keyword"],
  "strengths": ["short point"],
  "improvements": ["short point"]
}

Rules:
- overall_score must be an integer between 0 and 100
- matched_keywords and missing_keywords should each contain up to 8 items
- strengths and improvements should each contain 3 to 5 items
- base the analysis only on the provided inputs

Job title: ${jobTitle}
Company: ${company}
Job description:
${jobDescription}

Resume:
${resumeText}
`;

const extractJson = (rawText) => {
  const start = rawText.indexOf("{");
  const end = rawText.lastIndexOf("}");

  if (start === -1 || end === -1 || end <= start) {
    throw new Error("Model response did not include valid JSON");
  }

  return JSON.parse(rawText.slice(start, end + 1));
};

const normalizeResult = (result) => ({
  overall_score: Math.max(0, Math.min(100, Number.parseInt(result.overall_score, 10) || 0)),
  summary: typeof result.summary === "string" ? result.summary.trim() : "No summary generated.",
  matched_keywords: Array.isArray(result.matched_keywords)
    ? result.matched_keywords.filter(Boolean).slice(0, 8)
    : [],
  missing_keywords: Array.isArray(result.missing_keywords)
    ? result.missing_keywords.filter(Boolean).slice(0, 8)
    : [],
  strengths: Array.isArray(result.strengths) ? result.strengths.filter(Boolean).slice(0, 5) : [],
  improvements: Array.isArray(result.improvements)
    ? result.improvements.filter(Boolean).slice(0, 5)
    : [],
});

export const scoreResumeWithOllama = async ({ jobTitle, company, jobDescription, resumeText }) => {
  const response = await fetch(`${OLLAMA_URL}/api/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: OLLAMA_MODEL,
      prompt: buildPrompt({ jobTitle, company, jobDescription, resumeText }),
      stream: false,
      format: "json",
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Ollama request failed: ${response.status} ${text}`);
  }

  const data = await response.json();
  const parsed = extractJson(data.response || "");
  return normalizeResult(parsed);
};
