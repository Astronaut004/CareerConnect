import pool from "../models/db.js";

//create new job
export const createJob = async (req, res) => {
    const { position, company, status = 'pending' } = req.body;


    try {
        const result = await pool.query(
            'INSERT INTO jobs (position, company, status, created_by) VALUES ($1, $2, $3, $4) RETURNING *',
            [position, company, status, req.user]
        )
        res.status(201).json(result.rows[0]);
    }
    catch(error) {
        console.log(error);
        res.status(500).json({error: "failed to create job"});
        
    }
};

//get all job
export const getJobs = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM jobs WHERE created_by = $1', [req.user]);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
};


//get one job
export const getJobById = async (req,res) => {
    const {id} = req.params;
    try {
        const result = await pool.query(
            'SELECT * FROM jobs WHERE id = $1 AND created_by = $2',
            [id, req.user]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Job not found' });
        }

        res.status(200).json(result.rows[0]);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch job' });
    }
}


//update job

export const updateJob = async (req, res) => {
    const id  = parseInt(req.params.id, 10);
    const { position, company, status } = req.body;

    try {
        const result = await pool.query(
            'UPDATE jobs SET position = $1, company = $2, status = $3 WHERE id = $4 AND created_by = $5 RETURNING *',
            [position, company, status, id, req.user]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Job not found or not authorized' });
        }

        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update job' });
    }
};

// delete job
export const deleteJob = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query(
            'DELETE FROM jobs WHERE id = $1 AND created_by = $2 RETURNING *',
            [id, req.user]
        );

        if (result.rows.length === 0) {
            // No job found to delete
            return res.status(200).json({ message: 'Job already deleted or not found' });
        }

        res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete job' });
    }
};