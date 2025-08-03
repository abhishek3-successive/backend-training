import { Router } from 'express'
import { login, createUser,getUserProfile } from './userController';
import { authenticateToken } from '../../middlewares/auth';
import { validateSchema } from "../../middlewares/validateSchema";
import { validateLocation } from "../../middlewares/validateLocation";
import { dynamicValidation } from "../../middlewares/dynamicValidation";
import { authorizeRole } from '../../middlewares/role.middleware';


const router = Router();



router.post('/login', validateSchema,dynamicValidation ,login)
router.post('/register',validateSchema,dynamicValidation,createUser)
router.get('/profile/:id' ,authenticateToken,validateLocation,getUserProfile);
router.get('/admin', authenticateToken, authorizeRole('admin'), (req, res) => {
  res.json({ message: 'Welcome, admin!' });
});
router.get('/user', authenticateToken, authorizeRole('user', 'admin'), (req, res) => {
  res.json({ message: 'Welcome, user!' });
});
export default router;