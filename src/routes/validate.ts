import { Router, Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

const router = Router();

// Validation Route
router.post('/', (req: Request, res: Response, next: NextFunction) => {
  const { name, age } = req.body;

  // Validation Checks
  if (!name) {
    return next(createError(400, 'Name is required'));
  }

  if (age === undefined) {
    return next(createError(400, 'Age is required'));
  }

  if (typeof age !== 'number') {
    return next(createError(400, 'Age must be a number'));
  }

  if (age < 18) {
    return next(createError(400, 'You must be at least 18 years old'));
  }

  res.send(`Hello, ${name}. You are ${age} years old.`);
});

export default router;