// Main application entry point
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Recipe Manager!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});