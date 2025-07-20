import  express  from "express";

import { login,getUserProfile,createUser } from "../controllers/userController";

const router = express.Router();

router.post('/login', login)
router.post('/register',createUser)

router.get('/profile' ,getUserProfile)

export default router;