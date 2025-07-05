import pool from "../models/db.js";


// Apply to a specific job
export const applyToJob = async (req, res) => {
    const { applicant_name, applicant_email, resume_link } = req.body;
    const jobId = req.params.id;

    try {
        const jobResult = await pool.query('SELECT * FROM jobs WHERE id = $1', [jobId]);
        if (jobResult.rows.length === 0) {
            return res.status(404).json({ error: 'Job not found' });
        }


        const result = await pool.query(
            'INSERT INTO applications (applicant_name, applicant_email, resume_link, job_id) VALUES ($1, $2, $3, $4) RETURNING *',
            [applicant_name, applicant_email, resume_link, jobId]
        );
        res.status(201).json(result.rows[0]);
    }
    catch (err){
        console.log(err);
        res.status(500).json({error: 'Failed to apply'});
    }
}


// Get all applications for a specific job


export const getApplications = async (req,res) => {
    const jobId = req.params.id;

    try {
        const result = await pool.query('SELECT * FROM applications WHERE job_id = $1', [jobId]);
        res.status(200).json(result.rows);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({error: 'Failed to fetch applications'});
        
    }
}

export const deleteApplication = async (req, res) => {
    const applicationId  = req.params.id;
    try {
        const result = await pool.query('DELETE FROM applications WHERE id = $1 RETURNING *', [applicationId ]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Application not found' });
        }
        res.status(200).json({ message: 'Application deleted', application: result.rows[0] });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({error: 'Failed to delete application'})
        
    }

}