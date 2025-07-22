import express from 'express';
import mockUsers from './Day2/mockdata.js';

const router = express.Router();


import cookieParser from 'cookie-parser';
router.use(cookieParser());


router.get('/data', (req, res) => {
  res.json(mockUsers);
});


router.get('/', (req, res) => {
  console.log('Cookies:', req.cookies);
  console.log('Signed Cookies:', req.signedCookies);
  res.send('Welcome to the Home Page');
});

export default router;