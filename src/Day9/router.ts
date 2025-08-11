import express from 'express';
import { createItem } from '../controllers/MongoDB/item.controller';

const router = express.Router();


router.post('/', createItem);

export default router;
