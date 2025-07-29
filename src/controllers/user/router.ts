import { Router } from 'express'
import { login, createUser,getUserProfile } from './userController';
import { authenticateToken } from '../../middlewares/auth';
import { validateSchema } from "../../middlewares/validateSchema";
import { validateQuery } from "../../middlewares/validateQuery";
import { validateLocation } from "../../middlewares/validateLocation";
import { dynamicValidation } from "../../middlewares/dynamicValidation";


const router = Router();



router.post('/login', validateSchema,dynamicValidation ,login)
router.post('/register',validateSchema,dynamicValidation,createUser)
router.get('/profile' ,authenticateToken,getUserProfile);
router.get("/fetchid/:id",validateQuery);
router.get("/location",validateLocation);



export default router;