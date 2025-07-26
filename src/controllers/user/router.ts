import express from 'express'
import { login, createUser,getUserProfile } from './userController';
import { authenticateToken, generateToken } from '../../middlewares/auth';


const router = express.Router();


router.post('/login', login)
router.post('/register',createUser)
router.get('/profile' ,authenticateToken,getUserProfile)



export default router;