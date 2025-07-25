import express from 'express'
import { getHealthCheck,getOtherData,} from './otherControllers';

const router = express.Router();

router.get('/data',getOtherData)

router.get('/heath' , getHealthCheck);

export default router;