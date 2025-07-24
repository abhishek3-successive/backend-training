import express from 'express';
import mockUsers from './mockdata.js';
import cookieParser from 'cookie-parser';

const router = express.Router();

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