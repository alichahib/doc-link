import mongoose, { Document, Schema } from 'mongoose';

// Modèle pour les rendez-vous des professionnels de la santé
interface IProfessionalAppointment extends Document {
    patientId: mongoose.Types.ObjectId;
    doctorId: mongoose.Types.ObjectId;
    dateTime: Date;
    status: string;
  }
  
  const ProfessionalAppointmentSchema: Schema = new Schema({
    patientId: { type: mongoose.Types.ObjectId, required: true },
    doctorId: { type: mongoose.Types.ObjectId, required: true },
    dateTime: { type: Date, required: true },
    status: { type: String, required: true },
  });
  
export default mongoose.model<IProfessionalAppointment>('ProfessionalAppointment', ProfessionalAppointmentSchema);