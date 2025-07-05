import express from 'express';
import { applyToJob, getApplications, deleteApplication } from '../controllers/applicationController.js';
import protect from '../middlewares/authMiddleware.js';


const router = express.Router();

router.route('/jobs/:id/applications')
    .post(protect, applyToJob)
    .get(protect, getApplications)

router.route('/applications/:id')
    .delete(protect, deleteApplication);

export default router;