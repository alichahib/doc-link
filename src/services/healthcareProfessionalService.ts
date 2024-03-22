import HealthcareProfessionalModel, { IHealthcareProfessional } from '../models/HealthcareProfessional';

export async function addHealthcareProfessional(professionalData: IHealthcareProfessional): Promise<IHealthcareProfessional> {
  try {
    console.log(professionalData)
    const newProfessional = await HealthcareProfessionalModel.create(professionalData);
    console.log('µµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµ');
    return newProfessional;
  } catch (error) {
    throw new Error('Failed to add healthcare professional');
  }
}
