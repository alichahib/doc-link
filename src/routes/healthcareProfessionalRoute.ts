// routes/addHealthcareProfessionalRoute.ts

import express from 'express';
import { addHealthcareProfessionalController } from '../controllers/healthcareProfessionalController';

const router = express.Router();

// Route to add a new healthcare professional
router.put('/healthcareProfessional', addHealthcareProfessionalController);

router.post('/', (req, res) => {
    // Handle the POST request here
    res.send('Received a POST request to /healthcare-professionals');
  });

export default router;
