import mongoose, { Document, Schema } from 'mongoose';

export interface IDoctor extends Document {
    firstName: string;
    lastName: string;
    timings: string;
    email: string;
    phoneNumber: string;
    address: string;
    website: string;
    speciality: string;
    experience: string;
  }


// Define the schema for the User model
const DoctorSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  timings: { type: Object, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  website: { type: String },
  speciality: { type: String, required: true },
  experience: { type: String },
},{ collection: 'Doctor'});

// Export the model
export default mongoose.model<IDoctor>('Doctor', DoctorSchema);
