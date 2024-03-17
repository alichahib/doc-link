import mongoose, { Document, Schema } from 'mongoose';
// Modèle pour les disponibilités des professionnels de la santé
interface IAvailability extends Document {
    doctorId: mongoose.Types.ObjectId;
    dateTime: Date;
  }
  
  const AvailabilitySchema: Schema = new Schema({
    doctorId: { type: mongoose.Types.ObjectId, required: true },
    dateTime: { type: Date, required: true },
  });
  
export default mongoose.model<IAvailability>('Availability', AvailabilitySchema);