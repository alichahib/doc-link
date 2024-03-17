import mongoose, { Document, Schema } from 'mongoose';

interface IPatient extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
}

const PatientSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
});

export default mongoose.model<IPatient>('Patient', PatientSchema);
