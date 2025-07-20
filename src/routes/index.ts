import { Router, Request, Response } from 'express';

const router = Router();

// Home Route
router.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Home Page!');
});

export default router;