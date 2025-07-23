import { Request, Response } from 'express';
import Jwt from 'jsonwebtoken';
import { users, User } from '../data/user'; 

// LOGIN
export const login = (req: Request, res: Response) => {
    const  {username, password}  = req.body;
    if(!req.body){
        return res.status(400).json({message : "req.body is not parsed"})
    }
  

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = Jwt.sign({ id: user.id, username: user.username }, 'secret_key', {
    expiresIn: '1h',
  });

  return res.status(200).json({
    message: 'Login successful',
    token,
    user: { id: user.id, username: user.username },
  });
};

// REGISTER
export const createUser = (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    return res.status(409).json({ message: 'User already exists' });
  }

  const newUser: User = {
    id: users.length + 1,
    username,
    password,
  };

  users.push(newUser);

  return res.status(201).json({
    message: 'User registered successfully',
    user: { id: newUser.id, username: newUser.username },
  });
};

// PROFILE
export const getUserProfile = (req: Request, res: Response) => {
  res.status(200).json({ message: 'This is a protected profile route' });
};
