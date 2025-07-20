import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

// Asynchronous Error Route
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Simulate an asynchronous operation using a Promise
    await new Promise<void>((_, reject) => {
      setTimeout(() => {
        reject(new Error('Asynchronous Error Occurred!'));
      }, 1000);
    });

    res.send('This will not execute');
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});

export default router;