import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for HealthcareProfessional document
export interface IHealthcareProfessional extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  specialty: string;
}

// Define the schema for the HealthcareProfessional model
const HealthcareProfessionalSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  specialty: { type: String, required: true },
},{ collection: 'HealthcareProfessional' });

// Export the model
export default mongoose.model<IHealthcareProfessional>('HealthcareProfessional', HealthcareProfessionalSchema);
