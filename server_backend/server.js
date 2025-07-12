import express from "express";
import pool from "./models/db.js";
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import jobRoutes from './routes/jobRoutes.js';          // 👈 Add this
import applicationRoutes from './routes/applicationRoutes.js'; // 👈 Add this

const app = express();

app.use(cors());


app.use(express.json()); // 👈 Add this so req.body works!

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);                  // 👈 Mount Jobs API
app.use('/api', applicationRoutes);

app.get("/", async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Users');
        res.json(result.rows); // Send all users as JSON
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.listen(5000, () => {
    console.log('✅ Server running on http://localhost:5000');
});
