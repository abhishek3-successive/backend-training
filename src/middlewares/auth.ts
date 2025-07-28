import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key';

interface JwtPayload {
  userId: string;
  role: string;
}

  const generateToken =(payload: JwtPayload): string=> {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
}

 interface AuthenticatedRequest extends Request {
  headers: any;
  user?: JwtPayload;
}

 const authenticateToken= (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
)=> {
  const authHeader = req.headers['authorization'];
  if(!authHeader){
    return res.status(401).json({message : 'Acess denied, no tokken found'})
  }
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Token missing' });

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload;
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token' });
  }
}

export {generateToken,authenticateToken}