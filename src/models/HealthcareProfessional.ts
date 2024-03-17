import mongoose, { Document, Schema } from 'mongoose';

// Modèle pour les professionnels de la santé
interface IHealthcareProfessional extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  specialty: string;
}

const HealthcareProfessionalSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  specialty: { type: String, required: true },
});

export default mongoose.model<IHealthcareProfessional>('HealthcareProfessional', HealthcareProfessionalSchema);