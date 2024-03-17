import mongoose, { Document, Schema } from 'mongoose';

// Modèle pour les emplacements
interface ILocation extends Document {
    doctorId: mongoose.Types.ObjectId;
    address: string;
    latitude: number;
    longitude: number;
  }
  
  const LocationSchema: Schema = new Schema({
    doctorId: { type: mongoose.Types.ObjectId, required: true },
    address: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  });
  
export default mongoose.model<ILocation>('Location', LocationSchema);