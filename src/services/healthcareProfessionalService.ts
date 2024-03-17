import HealthcareProfessionalModel, { IHealthcareProfessional } from '../models/HealthcareProfessional';

export async function addHealthcareProfessional(professionalData: IHealthcareProfessional): Promise<IHealthcareProfessional> {
  try {
    const newProfessional = await HealthcareProfessionalModel.create(professionalData);
    return newProfessional;
  } catch (error) {
    throw new Error('Failed to add healthcare professional');
  }
}
