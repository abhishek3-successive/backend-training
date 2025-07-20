// src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

interface CustomError extends Error {
  status?: number;
}

const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // Set error status and message
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  // Log the error (optional)
  console.error(err);

  // Send JSON response
  res.status(status).json({
    error: {
      message,
      status,
    },
  });
};

export default errorHandler;