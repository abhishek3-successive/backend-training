import express, { Request, Response } from 'express';
import validate from './middlewares/validate';
import { registerSchema } from './schemas/user';
import validateNumericQuery from './middlewares/validateNumericQuery';
import validateGeolocation from './middlewares/validateGeolocation';
import dynamicValidate from './middlewares/dynamicValidate';

const app = express();

app.use(express.json());

// Apply dynamic validation middleware globally
app.use(dynamicValidate());

// Registration Route with Geolocation Validation
app.post('/register', validateGeolocation, validate(registerSchema), (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  
  // Registration logic goes here
  
  res.status(201).json({ message: 'User registered successfully', user: { username, email } });
});

// Products Route with Pagination
app.get('/products', validateNumericQuery(['page', 'limit']), (req: Request, res: Response) => {
  const { page, limit } = req.query;
  
  const pageNumber = parseInt(page as string, 10);
  const limitNumber = parseInt(limit as string, 10);
  
  // Fetch products based on page and limit
  
  res.json({ message: `Fetching products for page ${pageNumber} with limit ${limitNumber}` });
});

const PORT =  3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});