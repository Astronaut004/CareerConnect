import pool from "../models/db.js";

const ensureApplicationAtsColumns = async () => {
  await pool.query(`
    ALTER TABLE applications
    ADD COLUMN IF NOT EXISTS ats_score INTEGER,
    ADD COLUMN IF NOT EXISTS ats_summary TEXT,
    ADD COLUMN IF NOT EXISTS ats_matched_keywords JSONB,
    ADD COLUMN IF NOT EXISTS ats_missing_keywords JSONB,
    ADD COLUMN IF NOT EXISTS ats_strengths JSONB,
    ADD COLUMN IF NOT EXISTS ats_improvements JSONB
  `);
};

// Apply to job
export const applyToJob = async (req, res) => {
  const { id, applicant_name, applicant_email, resume_link, ats_analysis } = req.body;
  console.log("Received job application:", req.body, "Job ID:", req.params.id);

  if (!applicant_name || !applicant_email || !resume_link) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    await ensureApplicationAtsColumns();

    const checkjob = await pool.query("SELECT * FROM jobs WHERE id = $1", [id]);
    if (checkjob.rows.length === 0) {
      return res.status(404).json({ error: "Job not found" });
    }

    const result = await pool.query(
      `INSERT INTO applications (
        job_id,
        applicant_name,
        applicant_email,
        resume_link,
        ats_score,
        ats_summary,
        ats_matched_keywords,
        ats_missing_keywords,
        ats_strengths,
        ats_improvements
      ) VALUES ($1, $2, $3, $4, $5, $6, $7::jsonb, $8::jsonb, $9::jsonb, $10::jsonb)
      RETURNING *`,
      [
        id,
        applicant_name,
        applicant_email,
        resume_link,
        ats_analysis?.overall_score ?? null,
        ats_analysis?.summary ?? null,
        JSON.stringify(ats_analysis?.matched_keywords ?? []),
        JSON.stringify(ats_analysis?.missing_keywords ?? []),
        JSON.stringify(ats_analysis?.strengths ?? []),
        JSON.stringify(ats_analysis?.improvements ?? []),
      ]
    );

    res.status(201).json({
      message: "Application submitted successfully!",
      application: result.rows[0],
    });
  } catch (error) {
    console.log("Error submitting application:", error.message);
    res.status(500).json({ error: "Internal Server error" });
  }
};

// Get applications for a job
export const getApplications = async (req, res) => {
  try {
    await ensureApplicationAtsColumns();

    const result = await pool.query(`
      SELECT applications.*, jobs.company, jobs.position, jobs.status
      FROM applications
      INNER JOIN jobs ON applications.job_id = jobs.id
      ORDER BY applications.id DESC
    `);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "No applications found for this job" });
    }

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching applications:", error.message);
    res.status(500).json({ error: "Internal Server error" });
  }
};

// Withdraw application
export const withdrawApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const { applicant_email } = req.body;

    if (!applicant_email) {
      return res.status(400).json({ error: "Applicant email is required" });
    }

    const result = await pool.query(
      "DELETE FROM applications WHERE id = $1 AND applicant_email = $2 RETURNING *",
      [id, applicant_email]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Application not found" });
    }

    res.status(200).json({ message: "Application withdrawn successfully", application: result.rows[0] });
  } catch (error) {
    console.log("Error withdrawing application:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
