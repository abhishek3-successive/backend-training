import express from 'express'
import { login, createUser,getUserProfile } from './userController';
import { authenticateToken, generateToken } from '../../middlewares/auth';
import { validateSchema } from "../../middlewares/validateSchema";
import { validateQuery } from "../../middlewares/validateQuery";
import { validateLocation } from "../../middlewares/validateLocation";
import { dynamicValidation } from "../../middlewares/dynamicValidation";


const router = express.Router();


router.post('/login', login)
router.post('/register',createUser)
router.get('/profile' ,authenticateToken,getUserProfile);
router.post("/usercredentials",validateSchema);
router.get("/fetchid/:id",validateQuery);
router.get("/location",validateLocation);
router.post('/user/register',dynamicValidation)



export default router;