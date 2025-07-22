import Router from 'express';
import Day2 from './Day2/index.js';

const router = Router();



router.use('/api/assignment/Day2',Day2)

export default router;