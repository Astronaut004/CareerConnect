import express from 'express';
import {
    createJob,
    getJobs,
    getJobById,
    updateJob,
    deleteJob
} from '../controllers/jobController.js';
import protect from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').get(protect, getJobs).post(protect, createJob);

router
    .route('/:id')
    .get(protect, getJobById)
    .patch(protect,updateJob)
    .delete(protect,deleteJob);
export default router;
