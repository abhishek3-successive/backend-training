const express = require('express');
const mockUsers = require('./mockdata');

const app = express();
const PORT = 3004;

app.get('/', (req, res) => {
  res.json(mockUsers);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});