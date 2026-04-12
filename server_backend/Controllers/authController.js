import pool from "../models/db.js";
import Subscription from "../models/subscriptionModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register User (Job Seeker or Company)
export const registerUser = async (req, res) => {
  const {
    email,
    password,
    userType = 'jobseeker', // 'jobseeker' or 'company'
    fullName, // for job seekers
    phone, // for job seekers
    companyName, // for companies
    industry, // for companies
    companySize, // for companies
    website, // for companies
  } = req.body;

  try {
    // Check if user already exists
    const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashPass = await bcrypt.hash(password, 10);

    if (userType === 'company') {
      // Register Company
      const result = await pool.query(
        'INSERT INTO users (email, password, user_type, company_name, industry, company_size, website) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id, email, company_name, user_type',
        [email, hashPass, 'company', companyName, industry, companySize, website]
      );

      const company = result.rows[0];

      // Create subscription for company (in MongoDB)
      const subscription = new Subscription({
        company: company.id,
        plan: 'startup',
        status: 'active',
        price: 0, // Free trial
        startDate: new Date(),
        endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 day trial
        billingCycle: 'monthly',
      });

      await subscription.save();

      const token = jwt.sign(
        { userId: company.id, userType: 'company' },
        process.env.JWT_SECRET,
        { expiresIn: '30d' }
      );

      return res.status(201).json({
        message: 'Company registered successfully',
        user: {
          id: company.id,
          email: company.email,
          companyName: company.company_name,
          userType: 'company',
        },
        token,
        subscription,
      });
    } else {
      // Register Job Seeker
      const result = await pool.query(
        'INSERT INTO users (email, password, user_type, full_name, phone) VALUES ($1, $2, $3, $4, $5) RETURNING id, email, full_name, phone, user_type',
        [email, hashPass, 'jobseeker', fullName, phone]
      );

      const jobSeeker = result.rows[0];

      const token = jwt.sign(
        { userId: jobSeeker.id, userType: 'jobseeker' },
        process.env.JWT_SECRET,
        { expiresIn: '30d' }
      );

      return res.status(201).json({
        message: 'Job Seeker registered successfully',
        user: {
          id: jobSeeker.id,
          email: jobSeeker.email,
          fullName: jobSeeker.full_name,
          userType: 'jobseeker',
        },
        token,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
};

// Login User
export const loginUser = async (req, res) => {
  const { email, password, userType = 'jobseeker' } = req.body;

  try {
    const userResult = await pool.query(
      'SELECT * FROM users WHERE email = $1 AND user_type = $2',
      [email, userType]
    );

    const user = userResult.rows[0];

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user.id, userType },
      process.env.JWT_SECRET,
      { expiresIn: '30d' }
    );

    if (userType === 'company') {
      // Get subscription info
      const subscription = await Subscription.findOne({ company: user.id });

      return res.status(200).json({
        user: {
          id: user.id,
          email: user.email,
          companyName: user.company_name,
          userType: 'company',
          website: user.website,
        },
        token,
        subscription,
      });
    } else {
      return res.status(200).json({
        user: {
          id: user.id,
          email: user.email,
          fullName: user.full_name,
          phone: user.phone,
          userType: 'jobseeker',
        },
        token,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};