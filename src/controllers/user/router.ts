import express from 'express'
import { login, createUser,getUserProfile } from './userController';
import { authenticateToken, generateToken } from '../../middlewares/auth';
import { validateSchema } from "../../middlewares/validateSchema";
import { validateQuery } from "../../middlewares/validateQuery";
import { validateLocation } from "../../middlewares/validateLocation";
import { dynamicValidation } from "../../middlewares/dynamicValidation";


const router = express.Router();

// Test endpoint for schema validation
const handleUserCredentials = (req: express.Request, res: express.Response) => {
    res.status(200).json({
        message: 'Validation successful',
        data: req.body
    });
};

// Test endpoint without any validation
const handleTest = (req: express.Request, res: express.Response) => {
    res.status(200).json({
        message: 'Test endpoint works',
        data: req.body
    });
};

// Test endpoint for query validation
const handleFetchId = (req: express.Request, res: express.Response) => {
    res.status(200).json({
        id: req.params.id,
        message: 'Data fetched successfully'
    });
};

// Test endpoint for location validation
const handleLocation = (req: express.Request, res: express.Response) => {
    res.status(200).json({
        message: 'Location validated successfully',
        location: req.body
    });
};

// Test endpoint for dynamic validation
const handleDynamicValidation = (req: express.Request, res: express.Response) => {
    res.status(200).json({
        status: 'success',
        message: 'Dynamic validation passed',
        data: req.body
    });
};


router.post('/login', login)
router.post('/register',createUser)
router.get('/profile' ,authenticateToken,getUserProfile);
router.post("/usercredentials",validateSchema, handleUserCredentials);
router.get("/fetchid/:id",validateQuery, handleFetchId);
router.get("/location",validateLocation, handleLocation);
router.post('/user/register',dynamicValidation, handleDynamicValidation)
router.post('/test', handleTest); 



export default router;