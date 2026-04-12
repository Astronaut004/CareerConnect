import express from "express";
import protect from "../middlewares/authMiddleware.js";
import { scoreResumeAts } from "../Controllers/aiController.js";

const router = express.Router();

router.post("/ats-score", protect, scoreResumeAts);

export default router;
