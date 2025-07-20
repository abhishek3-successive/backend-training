import express from 'express';
import mockUsers from './mockdata.js';

const app = express();
const PORT = 3004;

app.get('/', (req, res) => {
  res.send(mockUsers);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});