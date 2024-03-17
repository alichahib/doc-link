import { Request, Response } from 'express';
import { addHealthcareProfessional } from '../services/healthcareProfessionalService';

export async function addHealthcareProfessionalController(req: Request, res: Response): Promise<void> {
  try {
    const professionalData = req.body; // Assuming the data is sent in the request body
    const newProfessional = await addHealthcareProfessional(professionalData);
    res.status(201).json(newProfessional);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add healthcare professional' });
  }
}
