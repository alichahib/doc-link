import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for User document
export interface IUser extends Document {
  userName: string;
  email: string;
  password: string;
  phoneNumber: string;
  type: string;
}

// Define the schema for the User model
const UserSchema: Schema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  type: { type: String, required: true },
  isAdmin: {type: Boolean, required: false},
  isDoctor:{type: Boolean, required: false},
},{ collection: 'User' });

// Export the model
export default mongoose.model<IUser>('User', UserSchema);
