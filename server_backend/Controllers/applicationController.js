import pool from "../models/db.js";


// Apply to job
export const applyToJob = async(req, res) => {
    const {id, applicant_name, applicant_email, resume_link} = req.body;
console.log("Received job application:", req.body, "Job ID:", req.params.id);

        if(!applicant_name || !applicant_email  || !resume_link) {
            return res.status(400).json({error: "All fields are required"});
        }
    
    try{
    
        const checkjob = await pool.query('SELECT * FROM jobs WHERE id = $1', [id]);
        if(checkjob.rows.length === 0) {
            return res.status(404).json({error: "Job not found"});
        }

        const result = await pool.query(
        'INSERT INTO applications (job_id, applicant_name, applicant_email, resume_link) VALUES ($1, $2, $3, $4) RETURNING *',
            [id, applicant_name, applicant_email, resume_link]
        )
        res.status(201).json({message: "Application submitted successfully!", application: result.rows[0]});
    }
    catch(error){
        console.log('Error submitting application:', error.message);
        res.status(500).json({error: "Internet Server error"});
    } 
}
  
// Get applications for a job
export const getApplications = async(req, res) => {
    try {
        const result = await pool.query('SELECT * FROM applications');
        if(result.rows.length === 0) {
            return res.status(404).json({error: "No applications found for this job"});
        }
        res.status(201).json(result.rows);
    } catch (error) {
        console.error('Error fetching applications:', error.message);
        res.status(500).json({error: "Internet Server error"});
    }
}

// withdraw application
export const withdrawApplication = async (req, res) => {
   
    try{
        const {id} = req.params;
        const { applicant_email } = req.body;
        
        if(!applicant_email) {
            return res.status(400).json({error: "Applicant email is required"});        
        }       
        const result = await pool.query
        ('DELETE FROM applications  WHERE id = $1 AND applicant_email = $2 RETURNING *',
             [id, applicant_email]);
        
             if(result.rows.length === 0) {
            return res.status(404).json({error: "Application not found"});
        }  
        res.status(201).json({message: "Application withdrawn successfully", application: result.rows[0]});     
    }

    catch(error){
        console.log('Error withdrawing application:', error.message);
        res.status(500).json({error: "Internet Server error"});
    }
}