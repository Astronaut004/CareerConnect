import express from 'express';
import { applyToJob, getApplications, deleteApplication } from '../controllers/applicationController.js';
import protect from '../middlewares/authMiddleware.js';