import express, { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import indexRouter from './routes/index';
import userRouter from './routes/user';
import adminRouter from './routes/admin';
import asyncErrorRouter from './routes/asyncError';
import validateRouter from './routes/validate';
import errorHandler from './middleware/errorHandler';

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define Routes
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.use('/async-error', asyncErrorRouter);
app.use('/validate', validateRouter);

// Catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404, 'Resource not found'));
});

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT: number = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});