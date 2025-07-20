import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

// Use cookieParser middleware
app.use(cookieParser());

// Define the root route
app.get('/', (req, res) => {
  console.log('Cookies: ', req.cookies);
  console.log('Signed Cookies: ', req.signedCookies);
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
