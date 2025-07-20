import { Router, Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

const router = Router();

// User Route
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  const isAuthenticated = false; // Simulating authentication failure

  if (!isAuthenticated) {
    return next(createError(401, 'Unauthorized'));
  }

  res.send('User Profile');
});

export default router;