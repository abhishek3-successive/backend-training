import express from 'express'
import userRoutes from './user/router';
import otherRoutes from './other/router';

const router = express.Router();

//Mount 

router.use('/user' , userRoutes);
router.use('/other', otherRoutes);


export default router;