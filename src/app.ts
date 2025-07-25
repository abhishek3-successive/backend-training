import express, { Request, Response } from 'express';
import customHeader from '././middlewares/customHeader';
import { middleware1, middleware2, middleware3 } from '././middlewares/middlewareChaining';
import customMiddleware from '././middlewares/custommiddleware';
import rateLimiter from '././middlewares/ratelimiter';
import routes from './routes'


const app = express();

// Middleware to parse JSON
app.use(express.json());

// Custom logging middleware
app.use(customMiddleware);

// Rate limiter: Allow max 5 requests per IP
app.use(rateLimiter(10));

// Add a custom header to every response
app.use(customHeader('X-Powered-By', 'Express-Custom'));

// Chain multiple custom middlewares
app.use(middleware1, middleware2, middleware3);

app.use('/', routes);


// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Route not found' });
});

export default app;