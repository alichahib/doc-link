// routes/addHealthcareProfessionalRoute.ts

import express from 'express';
import { addHealthcareProfessionalController } from '../controllers/healthcareProfessionalController';

const router = express.Router();

// Route to add a new healthcare professional
router.post('/healthcareProfessional', addHealthcareProfessionalController);

export default router;
