// src/routes/auth.routes.ts
import express from 'express';
import { register, login } from './controllers/auth.controller';
import { authorizeRole } from './middleware/role.middleware';
import { authenticate } from './middleware/auth';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/admin', authenticate, authorizeRole('admin'), (req, res) => {
  res.json({ message: 'Welcome, admin!' });
});

router.get('/user', authenticate, authorizeRole('user', 'admin'), (req, res) => {
  res.json({ message: 'Welcome, user!' });
});
export default router;
