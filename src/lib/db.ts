import mongoose from 'mongoose';
import configurations from '../config/configuration';

const { mongo_uri } = configurations;

export const connectDB = async () => {
  try {
    await mongoose.connect(mongo_uri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error(' MongoDB connection failed:', error);
    process.exit(1); 
  }
};

export const disconnectDB = async () => {
  try {
    await mongoose.connection.close();
    console.log(' MongoDB disconnected successfully');
  } catch (error) {
    console.error(' MongoDB disconnection failed:', error);
  }
};
