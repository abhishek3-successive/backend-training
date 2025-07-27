// src/app.ts
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './router';
import { authenticate } from './middleware/auth';


const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/your-db-name')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);

// Example protected route
app.get('/api/protected', authenticate, (req, res) => {
  res.json({ message: 'Access granted to protected route', user: (req as any).user });
});

export default app;
