import DoctorModel , { IDoctor } from '../models/Doctor';

export async function addDoctor(doctor: IDoctor): Promise<IDoctor> {
  try {
    console.log(doctor);
    const newProfessional = await DoctorModel.create(doctor);
    console.log('µµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµ');
    return newProfessional;
  } catch (error) {
    console.log(error)
    throw new Error('Failed to add user');
  }
}

// Fonction de recherche de médecins
export async function searchDoctor(query: Record<string, any>): Promise<IDoctor[]> {
    try {
        // Recherche dans la collection Doctor en fonction des critères de recherche
        const doctors: IDoctor[] = await DoctorModel.find(query);
        return doctors;
    } catch (error) {
        // Gérer les erreurs éventuelles
        console.error('Une erreur est survenue lors de la recherche des médecins :', error);
        throw error;
    }
}

// Fonction de recherche de médecins
export async function getDoctorByEmail(email:string): Promise<IDoctor | null> {
    try {
        // Recherche dans la collection Doctor en fonction des critères de recherche
        const doctor = await DoctorModel.findOne({email});
        return doctor;
    } catch (error) {
        // Gérer les erreurs éventuelles
        console.error('Une erreur est survenue lors de la recherche des médecins :', error);
        throw error;
    }
}
