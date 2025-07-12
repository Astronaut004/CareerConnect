import pool from "../models/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



export const registerUser = async (req, res) => {
    const {name, email, password} = req.body;

    try {
        const hashPass = await bcrypt.hash(password,10);
        const result = await pool.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email',
            [name, email, hashPass]
        );
        const token = jwt.sign(
            {userId: result.rows[0].id},
            process.env.JWT_SECRET, 
            { expiresIn: '1d' }
        );

        res.status(201).json({user: result.rows[0], token});
    }
    catch (err) {
        console.log(err);
        res.status(500).json({message: 'Registeration failed'});
    }
};


export const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try {
        const userResult = await pool.query('SELECT * FROM Users WHERE email = $1', [email]);
        const user = userResult.rows[0];

        if(!user) return res.status(400).json({message: 'User not found'});
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(401).json({message: 'Wrong credentials'});

        const token = jwt.sign(
            {userId: user.id},
            process.env.JWT_SECRET,
            { expiresIn: '1d'}
        )

        res.status(200).json({user: {id : user.id, name: user.name, email: user.email}, token});
    }
    catch(err) {
        console.log(err);
        res.status(500).json({message: 'Login failed'});
        
    }
};