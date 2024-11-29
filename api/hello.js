const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello, world!' });
});

module.exports = (req, res) => {
  app(req, res);
};