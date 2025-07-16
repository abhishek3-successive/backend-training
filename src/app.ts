import express, { Request, Response } from 'express';
import { generateToken, authenticateToken } from './Day3/middlewares/auth'; 
import customHeader from './Day3/middlewares/customHeader';
import { middleware1, middleware2, middleware3 } from './Day3/middlewares/middlewareChaining';
import customMiddleware from './Day3/middlewares/custommiddleware';
import rateLimiter from './Day3/middlewares/ratelimiter';

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Custom logging middleware
app.use(customMiddleware);

// Rate limiter: Allow max 5 requests per IP
app.use(rateLimiter(5));

// Add a custom header to every response
app.use(customHeader('X-Powered-By', 'Express-Custom'));

// Chain multiple custom middlewares
app.use(middleware1, middleware2, middleware3);

// Login route
app.post('/login', (req: Request, res: Response) => {
  const { userId, role } = req.body;

  if (!userId || !role) {
    return res.status(400).json({ message: 'Missing userId or role' });
  }

  const token = generateToken({ userId, role });
  res.json({ message: 'Login successful', token });
});

// Protected route
app.get('/protected', authenticateToken, (req: Request & { user?: any }, res: Response) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

// Root route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Route not found' });
});

// Server start
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
