// routes/addHealthcareProfessionalRoute.ts

import express from 'express';
import { addHealthcareProfessionalController } from '../controllers/healthcareProfessionalController';

const healthcareProfessionalRoute = express.Router();

// Route to add a new healthcare professional
healthcareProfessionalRoute.put('/', addHealthcareProfessionalController);

healthcareProfessionalRoute.post('/', (req, res) => {
    // Handle the POST request here
    res.send('Received a POST request to /healthcare-professionals');
  });

export default healthcareProfessionalRoute;
