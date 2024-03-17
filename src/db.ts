import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Charge les variables d'environnement à partir du fichier .env
dotenv.config();

const connectDB = async () => {
  try {
    const mongodbUri = process.env.MONGODB_URI;
    if (!mongodbUri) {
      throw new Error('MONGODB_URI is not defined in .env file');
    }

    await mongoose.connect(mongodbUri, {
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;
