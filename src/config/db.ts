import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); 

export const connectDB = async () => {
  const URI = process.env.MONGO_DB_URI;

  try {
    await mongoose.connect(URI);
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
