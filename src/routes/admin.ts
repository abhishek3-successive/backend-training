import { Router, Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

const router = Router();

// Admin Route
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  const isAdmin = false; // Simulating authorization failure

  if (!isAdmin) {
    return next(createError(403, 'Forbidden'));
  }

  res.send('Admin Dashboard');
});

export default router;