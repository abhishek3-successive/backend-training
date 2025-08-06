import { Request, Response } from 'express';
import { generateToken } from '../../middlewares/auth';
import {users, User} from './mockdata'; 
import fs from 'fs'
import path from 'path';
import bcrypt from "bcrypt"

const mockDataPath = path.join(__dirname, 'mockData.ts');

const saveUsersToMockData = (users: User[]) => {
  const tsContent = `export interface User {
  id: number;
  username: string;
  password: string;
}

export const users: User[] = ${JSON.stringify(users, null, 2)};
`;

  fs.writeFileSync(mockDataPath, tsContent, 'utf-8');
};

// LOGIN
export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!req.body || !username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const user = users.find(u => u.username === username);
  
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials: user not found' });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials: password mismatch' });
  }

  const token = generateToken({ username: user.username } as any);

  return res.status(200).json({
    message: 'Login successful',
    token,
  });
};

// REGISTER
export const createUser = async(req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    return res.status(409).json({ message: 'User already exists' });
  }

  const hashedpassword = await bcrypt.hash(password,2)

  const newUser: User = {
    id: users.length + 1,
    username,
    password:hashedpassword,
  };

  users.push(newUser);
  saveUsersToMockData(users);

  return res.status(201).json({
    message: 'User registered successfully',
  });
};

// PROFILE
export const getUserProfile = (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = Number(id);

  if (isNaN(userId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID: must be a number",
    });
  }

  const user = users.find(user => user.id === userId);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  return res.status(200).json({
    success: true,
    username: user.username,
    location: req.geoLocation || {},
  });
};
